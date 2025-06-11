import { SearchIcon } from "./Icons";

const Header = () => {
	return (
		<div className="flex w-full flex-row items-start justify-between">
			<div className="relative w-80">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search items"
					className="w-full rounded-lg border border-gray-400 p-2 pl-10 text-gray-400"
				/>
			</div>
			<button className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-nowrap text-white">
				New Item
			</button>
		</div>
	);
};

export default Header;
