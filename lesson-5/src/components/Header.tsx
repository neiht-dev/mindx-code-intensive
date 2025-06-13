import { SearchIcon } from "./Icons";

interface HeaderProps {
	onSearch: (query: string) => void;
	onOpenModal: (taskId: number) => void;
}

const Header = ({ onSearch, onOpenModal }: HeaderProps) => {
	return (
		<div className="flex w-full flex-row items-start justify-between">
			<div className="relative w-80">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search items"
					className="w-full rounded-lg border border-gray-400 p-2 pl-10 text-gray-400"
					onChange={(e) => onSearch(e.target.value)}
				/>
			</div>
			<button
				className="cursor-pointer rounded-lg bg-blue-700 px-5 py-2 font-medium text-nowrap text-white"
				onClick={() => onOpenModal(-1)}
			>
				New Item
			</button>
		</div>
	);
};

export default Header;
