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
    deadline: Date;
}


export const getTasks = (status: TaskStatus): Task[] => {
    const filteredTasks = tasks.filter((task) => task.statusId === status);
    return filteredTasks.map((task) => {
        return {
            taskId: task.taskId,
            title: task.title,
            description: task.description,
            status: taskStatus.find((status) => status.statusId === task.statusId),
            flag:
                flags.find((flag) => flag.flagId === task.flagId),
            assignedUser:
                users.find((user) => user.userId === task.assignedTo),
            deadline: task.deadline
        };
    });
};
