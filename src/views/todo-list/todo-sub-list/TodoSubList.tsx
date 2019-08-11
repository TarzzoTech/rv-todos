import React, { useState } from "react";
import { TodoItem } from "../../../modal";
import { makeStyles, ListItemIcon, Checkbox } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(8),
    }
}));

export const TodoSubList = ({ todoItems }: TodoSubListProps) => {
    const classes = useStyles();
    const [checkedId, addCheckedId] = useState([] as string[]);

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

    return (
        <List component="div" disablePadding>
            {
                todoItems.map(item => {
                    return (
                        <ListItem button className={classes.nested} key={item.Id} onClick={() => handleCheckboxToggle(item.Id)}>
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
    );
}

export interface TodoSubListProps {
    todoItems: TodoItem[];
}