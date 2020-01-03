import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Nav(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                EKA
                </Typography>
            </Toolbar>
        </AppBar>
    )
}