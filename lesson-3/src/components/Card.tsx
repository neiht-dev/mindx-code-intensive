import { EditIcon, AttachmentIcon, FlagIcon, ClockIcon } from "./Icons";

const NameBadge = () => {
    return (
        <div className="text-nowrap rounded-md bg-blue-600 px-3 py-1 font-medium text-white text-center">
            MindX School
        </div>
    );
};

const CardTitle = () => {
    return (
        <div className="flex items-center justify-center text-center font-medium text-gray-800">
            Mobile Wireframes
        </div>
    )
}

const CardDescription = () => {
    return (
        <div className="flex text-gray-800">
            Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiên
        </div>
    )
}

const Card = () => {
    return (
        <div className="flex flex-col rounded-md bg-white">
            <div className="flex w-[286px] flex-col items-start justify-start gap-3 p-3">
                <div className="flex w-full flex-row items-center justify-between">
                    <CardTitle />
                    <EditIcon />
                </div>
                <CardDescription />
                <NameBadge />
            </div>
            <hr className="border-gray-200" />


            <div className="flex flex-row items-center justify-center gap-3 py-2">
                <div className="flex flex-row items-center justify-center gap-1">
                    <AttachmentIcon />
                    <div className="font-bold text-gray-800">
                        3
                    </div>
                </div>
                <FlagIcon />

                <div className="flex flex-row items-center justify-center gap-0.5">
                    <ClockIcon />
                    <div className="font-bold text-gray-800">
                        Apr 12
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;
