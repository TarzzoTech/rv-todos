import React, { useState } from "react";
import { Todo } from "../../../modal";
import { makeStyles, Divider, ListItemIcon, Checkbox } from "@material-ui/core";
import { deepOrange } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500]
    },
    nested: {
        paddingLeft: theme.spacing(8),
    },
}));

export const TodoListItem = ({ todo }: TodoListItemProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [checkedId, addCheckedId] = React.useState([] as string[]);

    function handleClick() {
        setOpen(!open);
    }

    const handleToggle = (value: string) => {
        const currentIndex = checkedId.indexOf(value);
        const newChecked = [...checkedId];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        addCheckedId(newChecked);
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        {todo.Title[0]}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={todo.Title} secondary={todo.Description || "No description provided"} />
                {
                    todo.TodoItems.length > 0
                        ?
                        open ? <ExpandLess /> : <ExpandMore />
                        :
                        <></>
                }
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        todo.TodoItems.map(item => {
                            return (
                                <ListItem button className={classes.nested} key={item.Id} onClick={() => handleToggle(item.Id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            color='primary'
                                            checked={checkedId.indexOf(item.Id) > -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': item.Title }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={item.Id} primary={item.Title} />
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Collapse>
        </>
    );
}

export interface TodoListItemProps {
    todo: Todo;
}