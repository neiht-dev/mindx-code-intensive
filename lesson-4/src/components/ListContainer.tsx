import Card from "./Card";
import type { Task } from "../data/service";

interface ListContainerProps {
	tasks: Task[];
	total: number;
	status: string | undefined;
}

const ListContainer = (props: ListContainerProps) => {
	return (
		<div className="flex h-full w-80 flex-col items-center justify-start rounded-lg bg-slate-200 p-4">
			<div className="flex w-full flex-row items-center justify-between pb-3">
				<div className="flex flex-row items-center justify-center gap-3">
					<div className="font-semibold">{props.status}</div>
					<div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-300 text-center font-semibold">
						{props.total}
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
				{props.tasks.map((task, index) => (
					<Card key={index} {...task} />
				))}
			</div>
		</div>
	);
};

export default ListContainer;
