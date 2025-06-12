import { users, flags, taskStatus, tasks } from "./mock";

export enum TaskStatus {
    ToDo = 1,
    InProgress = 2,
    InReview = 3,
    Done = 4
}

interface User {
    userId: number;
    name: string;
}

interface Flag {
    flagId: number;
    name: string;
    color: string;
}

interface Status {
    statusId: TaskStatus;
    name: string;
}

export interface Task {
    taskId: number;
    title: string;
    description: string;
    status: Status | undefined;
    flag: Flag | undefined;
    assignedUser: User | undefined;
    deadline: string;
}

export interface GetTaskRepsonse {
    tasks: Task[];
    total: number;
    status: string;
}

export const getTasks = (filterStatus: TaskStatus, query: string = ""): GetTaskRepsonse => {
    const filteredTasks: Task[] = tasks
        .filter((task) => {
            const findByStatus = task.statusId === filterStatus
            const findByTitle = query === "" || task.title.includes(query)
            const findByDescription = query === "" || task.description.includes(query)
            return findByStatus && (findByTitle || findByDescription)
        })
        .map((task) => {
            return {
                taskId: task.taskId,
                title: task.title,
                description: task.description,
                status: taskStatus.find((status) => status.statusId === task.statusId),
                flag:
                    flags.find((flag) => flag.flagId === task.flagId),
                assignedUser:
                    users.find((user) => user.userId === task.assignedTo),
                deadline: task.deadline.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                })
            };
        });
    return {
        tasks: filteredTasks,
        total: filteredTasks.length,
        status: taskStatus.find(status => status.statusId === filterStatus)?.name || "Unknown"
    }
};
