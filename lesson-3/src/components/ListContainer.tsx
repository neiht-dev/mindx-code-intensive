import Card from "./Card";
const ListContainer = () => {
	return (
		<div className="flex h-full w-80 flex-col items-center justify-start rounded-lg bg-slate-200 p-4">
			<div className="flex w-full flex-row items-center justify-between pb-3">
				<div className="flex flex-row items-center justify-center gap-3">
					<div className="font-semibold">Todo</div>
					<div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-300 text-center font-semibold">
						3
					</div>
				</div>
				<div className="flex flex-row items-center justify-center gap-2">
					<div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-300 text-center font-semibold">
						+
					</div>
					<div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-300 text-center font-semibold">
						···
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-start gap-3">
				<Card />
			</div>
		</div>
	);
};

export default ListContainer;
