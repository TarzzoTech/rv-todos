import React from "react";
import { TodoStatus } from "../modal";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TodoList } from "./todo-list";
import { MIN_HEIGHT } from "../utils";
import { TodoModal } from "./creators";

const height = {
    height: "100%",
    minHeight: MIN_HEIGHT
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        border: "1px solid #b3b3b3",
        borderRadius: "20px",
        ...height
    },
    grid: {
        padding: theme.spacing(2),
        ...height
    },
    gridItem: {
        border: "2px solid #b3b3b3",
        height: "100%"
    }
}));

export const View = (props: ViewProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item sm={3} className={classes.gridItem}><TodoList category={TodoStatus.OPEN} /></Grid>
                <Grid item sm={3} className={classes.gridItem}><TodoList category={TodoStatus.TODAY} /></Grid>
                <Grid item sm={3} className={classes.gridItem}><TodoList category={TodoStatus.IN_PROGRESS} /></Grid>
                <Grid item sm={3} className={classes.gridItem}><TodoList category={TodoStatus.DONE} /></Grid>
            </Grid>
            <TodoModal />
        </div>
    );
}

export interface ViewProps {
}