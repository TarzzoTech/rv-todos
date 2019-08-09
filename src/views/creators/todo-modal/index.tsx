import React, { useContext, useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ContextAPI } from "../../../context";
import { onModalCancel, onModalSubmit } from "../../../store";
import { emptyTodo, ToDoStatusOptions, dateBeautifier } from "../../../utils";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
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
        onModalSubmit(dispatch, updatedTodo);
        updateTodo(emptyTodo());
    }

    // triggered on evert input changes and update values in local state
    const onInputChanges = (key: string, value: any) => {
        console.log({ [key]: value });
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
                    margin="dense"
                    id="Description"
                    className={classes.textField}
                    defaultValue={updatedTodo.Description}
                    value={updatedTodo.Description}
                    autoComplete="off"
                    label="Description"
                    type="text"
                    onChange={(event) => onInputChanges('Description', event.target.value)}
                />
                <TextField
                    id="Status"
                    select
                    label="Status"
                    className={classes.textField}
                    defaultValue={updatedTodo.Status}
                    value={updatedTodo.Status}
                    disabled={todo ? true : false}
                    onChange={(event) => onInputChanges('Status', event.target.value)}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="dense"
                >
                    {ToDoStatusOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue={dateBeautifier(updatedTodo.ActionDate)}
                    value={dateBeautifier(updatedTodo.ActionDate)}
                    onChange={(event) => onInputChanges('ActionDate', new Date(event.target.value))}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onCancel}>Close</Button>
                <Button color="secondary" onClick={onSubmit}>{todo ? 'Update' : 'Create'}</Button>
            </DialogActions>
        </Dialog>
    </>);
}

export interface TodoModalProps {
}