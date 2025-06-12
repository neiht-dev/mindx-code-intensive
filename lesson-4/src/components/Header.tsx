import { SearchIcon } from "./Icons";

interface HeaderProps {
	query: string;
	onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ query, onSearch }: HeaderProps) => {

	return (
		<div className="flex w-full flex-row items-start justify-between">
			<div className="relative w-80">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search items"
					className="w-full rounded-lg border border-gray-400 p-2 pl-10 text-gray-400"
					value={query}
					onChange={onSearch}
				/>
			</div>
			<button className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-nowrap text-white">
				New Item
			</button>
		</div>
	);
};

export default Header;
