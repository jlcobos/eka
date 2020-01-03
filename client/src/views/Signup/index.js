import React from "react";
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormStepper from "../../components/Stepper";
import Form from "../../components/Form";

const useStyles = makeStyles({
    card: {
        maxWidth: 700,
        margin: "24px auto"
    },
});

export default function Signup(){
    const classes = useStyles();

    const forms = [
    {formName: "signupForm1" , form: <Form formName={"signupForm1"}/>},
    {formName: "signupForm2" , form: <Form formName={"signupForm2"}/>},
    {formName: "signupForm3" , form: <Form formName={"signupForm3"}/>},
    {formName: "success" , form: <p>All Done!</p>},
    ];

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Signup
                </Typography>
                <FormStepper forms={forms} />
            </CardContent>
        </Card>
    )
}