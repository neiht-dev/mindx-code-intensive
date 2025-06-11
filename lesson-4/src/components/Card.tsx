import { EditIcon, AttachmentIcon, FlagIcon, ClockIcon } from "./Icons";
import type { Task } from "../data/service";
const NameBadge = ({ assignedName }: { assignedName: string | undefined }) => {
    return (
        <div className="rounded-md bg-blue-600 px-3 py-1 text-center font-medium text-nowrap text-white">
            {assignedName ? assignedName : "Unassigned"}
        </div>
    );
};

const CardTitle = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center justify-center text-center font-medium text-gray-800">
            {title}
        </div>
    );
};

const CardDescription = ({ description }: { description: string }) => {
    return <div className="flex text-gray-800">{description}</div>;
};



const Card = (props: Task) => {
    return (
        <div className="flex flex-col rounded-md bg-white">
            <div className="flex w-[286px] flex-col items-start justify-start gap-3 p-3">
                <div className="flex w-full flex-row items-center justify-between">
                    <CardTitle title={props.title} />
                    <EditIcon />
                </div>
                <CardDescription description={props.description} />
                <NameBadge assignedName={props.assignedUser?.name} />
            </div>
            <hr className="border-gray-200" />

            <div className="flex flex-row items-center justify-center gap-3 py-2">
                <div className="flex flex-row items-center justify-center gap-1">
                    <AttachmentIcon />
                    <div className="font-bold text-gray-800">3</div>
                </div>
                {props.flag && <FlagIcon color={props.flag.color} />}

                <div className="flex flex-row items-center justify-center gap-0.5">
                    <ClockIcon />
                    <div className="font-bold text-gray-800">{props.deadline}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
