import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import { getTasks, TaskStatus } from "./data/service";
const todoTasks = getTasks(TaskStatus.ToDo);

const App = () => {
	return (
		<div className="flex min-h-screen flex-col items-start justify-start gap-3 p-5">
			<Header />
			<ListContainer tasks={todoTasks} />
		</div>
	);
};

export default App;
