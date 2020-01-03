import React, { useContext } from "react";
import { Stepper, Step, StepLabel, StepContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppState } from "../../AppState";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function FormStepper({forms}) {
    const classes = useStyles();

    const { handleFormSubmit } = useContext(AppState)

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = (formName) => {
        const success = handleFormSubmit(formName)
        if(success) setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleEnd = (formName) => {
        const success = handleFormSubmit(formName);
        if(success) setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            {forms.map((form, i) => {
                return (
                    <Step key={i}>
                        <StepLabel></StepLabel>
                        <StepContent>
                            {form.form}
                            {form.formName !== "success" ? 
                                <div style={{marginTop: 16}} >
                                    {activeStep < forms.length -1 ? <Button variant="contained" color="primary" className={classes.menuButton} onClick={() => handleNext(form.formName)}>SAVE & Next</Button> : null}
                                    {activeStep === forms.length -1 ? <Button variant="contained" color="primary" className={classes.menuButton} onClick={() => handleEnd(form.formName)}>Finish</Button> : null}
                                    {activeStep > 0 ? <Button variant="contained" color="secondary" className={classes.menuButton} onClick={handleBack}>Go Back</Button> : null}
                                </div>
                                :
                                null
                            }
                        </StepContent>
                    </Step>
                ) 
            })}
        </Stepper>
    )
}