import React, { useState } from "react";
import { Todo, Dispatch } from "../../../modal";
import { makeStyles, ListItemIcon, Checkbox } from "@material-ui/core";
import { deepOrange } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { openUpdateModal, deleteTodoItem } from "../../../store";
import { TodoSubList } from "../todo-sub-list";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500]
    },
    nested: {
        paddingLeft: theme.spacing(8),
    }
}));

export const TodoListItem = ({ todo, dispatch }: TodoListItemProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [checkedId, addCheckedId] = React.useState([] as string[]);

    function handleClick() {
        setOpen(!open);
    }

    const handleCheckboxToggle = (value: string) => {
        const currentIndex = checkedId.indexOf(value);
        const newChecked = [...checkedId];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        addCheckedId(newChecked);
    };

    const onEdit = () => {
        dispatch(openUpdateModal(todo));
    }
    const onDelete = () => {
        deleteTodoItem(dispatch, todo);
    }

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        {todo.Title[0]}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={todo.Title} secondary={todo.Description || "No description provided"} />
                <IconButton aria-label="Edit" onClick={onEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete" onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
                {
                    todo.TodoItems.length > 0
                        ?
                        open ? <ExpandLess /> : <ExpandMore />
                        :
                        <></>
                }
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <TodoSubList todoItems={todo.TodoItems} />
            </Collapse>
        </>
    );
}

export interface TodoListItemProps {
    todo: Todo;
    dispatch: Dispatch;
}