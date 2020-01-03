import React from "react";
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        maxWidth: 700,
        margin: "24px auto"
    },
});

export default function Home(){
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Home
                </Typography>
                <Button variant="contained" color="primary">
                    <NavLink className="nav-link" to={"signup"}>Signup</NavLink> 
                </Button>
            </CardContent>
        </Card>
    )
}