import { useState } from "react";
import { FlagIcon, CloseIcon } from "./Icons";
import { users, taskStatus, flags } from "../data/mock";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: {
        title: string;
        description: string;
        endDate: Date;
        assign: number;
        status: number;
        flag: number;
    }) => void;
}

const Modal = ({ isOpen, onClose, onSave }: ModalProps) => {
    // Form fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [endDate, setEndDate] = useState(new Date());
    const [assign, setAssign] = useState(1);
    const [status, setStatus] = useState(1);
    const [flag, setFlag] = useState(1);

    // Fields validations
    const [titleValidation, setTitleValidation] = useState("");
    const validateForm = () => {
        let pass = true;
        if (title.trim() === "") {
            setTitleValidation("Title is required");
            console.log(titleValidation);
            pass = false;
        }
        return pass;
    };

    const handleSave = () => {
        if (!validateForm()) return;
        onSave({ title, description, endDate, assign, status, flag });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 z-99 h-full w-full bg-gray-600/30">
            <div className="absolute top-1/2 left-1/2 z-99 flex w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 rounded-2xl bg-white p-8 shadow-lg">
                {/* Buttons */}
                <div className="flex flex-row justify-between">
                    <button
                        className="absolute top-6 right-6 cursor-pointer text-2xl text-gray-400 hover:text-gray-600"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>

                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200"
                        onClick={() => {
                            const maxFlagId = Math.max(...flags.map(f => f.flagId));
                            setFlag(flag === maxFlagId ? 1 : flag + 1);
                        }}
                    >
                        <FlagIcon color={flags.find(f => f.flagId === flag)?.color || flags[1].color} />
                        <input type="hidden" value={flag} />
                    </button>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Create a new Task
                    </h2>
                </div>

                {/* Form */}
                <form
                    className="space-y-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSave();
                    }}
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium">
                                Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900"
                                placeholder="Type title of task"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {titleValidation && (
                                <p className="mt-1 text-sm text-red-500">
                                    Title is required
                                </p>
                            )}
                        </div>
                        {/* End Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900"
                                value={endDate.toISOString().split("T")[0]}
                                onChange={(e) =>
                                    setEndDate(new Date(e.target.value))
                                }
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                className="mt-1 h-[60px] w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900"
                                placeholder="Type description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        {/* Assign */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Assign
                            </label>
                            <select
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-900"
                                value={assign}
                                onChange={(e) =>
                                    setAssign(Number(e.target.value))
                                }
                            >
                                {users.map((user) => (
                                    <option
                                        key={user.userId}
                                        value={user.userId}
                                    >
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            className="mt-1 w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-gray-900"
                            value={status}
                            onChange={(e) => setStatus(Number(e.target.value))}
                        >
                            <option value="">Choose status</option>
                            {taskStatus.map((status) => (
                                <option
                                    key={status.statusId}
                                    value={status.statusId}
                                >
                                    {status.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Footer */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            className="flex-1 cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-base font-semibold text-gray-700 hover:bg-gray-50"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 cursor-pointer rounded-lg bg-purple-500 px-6 py-2.5 text-base font-semibold text-white hover:bg-purple-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Modal;
