import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
const App = () => {
	return (
		<div className="flex min-h-screen flex-col items-start justify-start gap-3 p-5">
			<Header />
			<ListContainer />
		</div>
	);
};

export default App;
