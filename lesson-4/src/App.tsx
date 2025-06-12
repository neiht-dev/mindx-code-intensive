import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import { getTasks, TaskStatus } from "./data/service";

import React, { useState } from "react";




const App = () => {
	const [query, setQuery] = useState("")

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setQuery(value)
		console.log(value)
	}

	const todoTasks = getTasks(TaskStatus.ToDo, query);
	const inProgressTasks = getTasks(TaskStatus.InProgress, query);
	const inReviewTasks = getTasks(TaskStatus.InReview, query);
	const doneTasks = getTasks(TaskStatus.Done, query);

	return (
		<div className="flex min-h-screen flex-col items-start justify-start gap-3 p-5">
			<Header onSearch={handleSearch} query={query} />
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
