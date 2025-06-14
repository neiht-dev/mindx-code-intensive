import Header from "./components/Header";
// import Modal from "./components/Modal";
import ModalAntd from "./components/ModalAntd"
import ListContainer from "./components/ListContainer";
import { tasks } from "./data/mock";
import { getTasks, TaskStatus } from "./data/service";
import { useState } from "react";



const App = () => {
	const [query, setQuery] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [taskId, setTaskId] = useState(-1);


	const handleSearch = (query: string) => {
		setQuery(query);
	};

	const handleOpenModal = (taskId: number) => {
		console.log(taskId);
		setTaskId(taskId);
		setIsModalOpen(true);
	};
	const handleCloseModal = () => setIsModalOpen(false);

	const handleSaveModal = (data: {
		id: number;
		title: string;
		description: string;
		endDate: Date;
		assign: number;
		status: number;
		flag: number;
	}) => {
		console.log(data);
		if (taskId === -1) {
			tasks.push({
				taskId:
					tasks
						.map((task) => task.taskId)
						.reduce((maxValue, value) =>
							Math.max(maxValue, value)
						) + 1,
				title: data.title,
				description: data.description,
				statusId: data.status,
				flagId: data.flag,
				assignedTo: data.assign,
				deadline: data.endDate
			});
		} else {
			const task = tasks.find((task) => task.taskId === taskId);
			if (task) {
				task.title = data.title;
				task.description = data.description;
				task.statusId = data.status;
				task.flagId = data.flag;
				task.assignedTo = data.assign;
				task.deadline = data.endDate;
			}
		}
		setIsModalOpen(false);
	};

	const todoTasks = getTasks(TaskStatus.ToDo, query);
	const inProgressTasks = getTasks(TaskStatus.InProgress, query);
	const inReviewTasks = getTasks(TaskStatus.InReview, query);
	const doneTasks = getTasks(TaskStatus.Done, query);
	console.log("rerender")
	return (
		<div className="relative flex min-h-screen flex-col items-start justify-start gap-3 p-5">
			<ModalAntd
				taskId={taskId}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSave={handleSaveModal}
			/>
			<Header onSearch={handleSearch} onOpenModal={handleOpenModal} />
			<div className="flex flex-row items-start justify-between gap-3">
				<ListContainer {...todoTasks} onOpenModal={handleOpenModal} />
				<ListContainer
					{...inProgressTasks}
					onOpenModal={handleOpenModal}
				/>
				<ListContainer
					{...inReviewTasks}
					onOpenModal={handleOpenModal}
				/>
				<ListContainer {...doneTasks} onOpenModal={handleOpenModal} />
			</div>
		</div>
	);
};

export default App;
