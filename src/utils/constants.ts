import { TodoStatus } from "../modal";

export const MIN_HEIGHT = 590;
export const MAX_HEIGHT = 620;

export const ToDoStatusOptions = [
    {
        label: "Open",
        value: TodoStatus.OPEN
    },
    {
        label: "In Progress",
        value: TodoStatus.IN_PROGRESS
    },
    {
        label: "Completed",
        value: TodoStatus.DONE
    },
    {
        label: "Today",
        value: TodoStatus.TODAY
    }
];