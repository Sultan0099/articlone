import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Personal from './Personal'
import BusinessInfo from './BusinessInfo'
import Education from './Education'
import Contact from './Contact'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        width: '99%',
    },
    step: {
        marginTop: '20px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            marginLeft:'-30px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft:'-30px',
        },
    },
    backButton: {
        marginTop:'20px',
        marginRight: theme.spacing(1),
    },
    nextButton: {
        marginTop:'25px',
        marginLeft:theme.spacing(20),
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Personal', 'Details', 'Education & Purpose', 'Contact'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Personal />
        case 1:
            return <BusinessInfo />
        case 2:
            return <Education />;
        case 3:
            return <Contact />;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSave = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper className={classes.step} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>You are ready to go!</Typography>
                        <Button onClick={handleSave} color="primary">{'Save & Continue'}</Button>
                    </div>
                ) : (
                        <div>
                            {getStepContent(activeStep)}
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" className={classes.nextButton} onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
