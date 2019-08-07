export interface Todo {
    Id: string;
    Title: string;
    Description?: string;
    TodoItems: TodoItem[];
    Status: TodoStatus;
    CreateDate: Date;
    ActionDate: Date;
}

export interface TodoItem {
    Id: string;
    Title: string;
    Completed: boolean;
    IsEditing: boolean;
}

export enum TodoStatus {
    OPEN,
    IN_PROGRESS,
    DONE,
    TODAY
}

export const TodoStatusObject = {
    [TodoStatus.OPEN]: 'Open',
    [TodoStatus.IN_PROGRESS]: 'In Progress',
    [TodoStatus.DONE]: 'Completed',
    [TodoStatus.TODAY]: 'Today'
}
