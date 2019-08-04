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