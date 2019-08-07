import React, { useContext, useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ContextAPI } from "../../../context";
import { onModalCancel, onModalSubmit } from "../../../store";
import { emptyTodo, addTodo } from "../../../utils";
import { TodoStatusObject } from "../../../modal";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

export const TodoModal = () => {
    const { state, dispatch } = useContext(ContextAPI);
    const [updatedTodo, updateTodo] = useState(emptyTodo());
    const show = state.showModal;
    const todo = state.selectedTodo;

    // componentDidMount
    useEffect(() => {
        updateTodo(todo ? { ...updatedTodo, ...todo } : updatedTodo);
    }, []);

    // on modal close
    const onCancel = () => {
        updateTodo(emptyTodo());
        dispatch(onModalCancel());
    };

    /**
     * triggered on modal submit
     * adding todo to todo list using addTodo function
     * passing to action for state update
     */
    const onSubmit = () => {
        dispatch(onModalSubmit(addTodo(state.TodoList, updatedTodo)));
        updateTodo(emptyTodo());
    }

    // triggered on evert input changes and update values in local state
    const onInputChanges = (key: string, value: any) => {
        updateTodo({ ...updatedTodo, [key]: value });
    }

    const classes = useStyles();
    return (<>
        <Dialog open={show}>
            <DialogTitle id="todo-create-update">
                {todo ? 'Update Todo' : 'Create Todo'}
            </DialogTitle>
            <DialogContent className={classes.container}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Title"
                    className={classes.textField}
                    defaultValue={updatedTodo.Title}
                    value={updatedTodo.Title}
                    autoComplete="off"
                    label="Title"
                    type="text"
                    onChange={(event) => onInputChanges('Title', event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="Title"
                    className={classes.textField}
                    defaultValue={updatedTodo.Title}
                    value={updatedTodo.Title}
                    autoComplete="off"
                    label="Title"
                    type="text"
                    onChange={(event) => onInputChanges('Title', event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onCancel}>Close</Button>
                <Button color="secondary" onClick={onSubmit}>{todo ? 'Update' : 'Create'}</Button>
            </DialogActions>
        </Dialog>
    </>);
}

export interface TodoModal {
}