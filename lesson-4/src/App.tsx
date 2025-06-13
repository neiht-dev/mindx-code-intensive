import Header from "./components/Header";
import Modal from "./components/Modal";
import ListContainer from "./components/ListContainer";
import { getTasks, TaskStatus } from "./data/service";

import { useState } from "react";

const App = () => {
	const [query, setQuery] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSearch = (query: string) => {
		setQuery(query);
	};

	const handleOpenNewModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);
	const handleSaveModal = () => setIsModalOpen(false);

	const todoTasks = getTasks(TaskStatus.ToDo, query);
	const inProgressTasks = getTasks(TaskStatus.InProgress, query);
	const inReviewTasks = getTasks(TaskStatus.InReview, query);
	const doneTasks = getTasks(TaskStatus.Done, query);

	return (
		<div className="relative flex min-h-screen flex-col items-start justify-start gap-3 p-5">
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSave={handleSaveModal}
			/>
			<Header
				onSearch={handleSearch}
				onOpenModal={handleOpenNewModal}
			/>
			<div className="flex flex-row items-start justify-between gap-3">
				<ListContainer {...todoTasks} />
				<ListContainer {...inProgressTasks} />
				<ListContainer {...inReviewTasks} />
				<ListContainer {...doneTasks} />
			</div>
		</div>
	);
};

export default App;
