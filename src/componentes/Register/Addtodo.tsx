import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Typography from '@material-ui/core/Typography';
import FormOne from '../Forms/FormOne'
import FormTwo from '../Forms/FormTwo'
import FormThree from '../Forms/FormThree'
import { Success } from '../Forms/FormSuccess';






const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Name Field', ' Email Field', 'Permanent Address Field'];
}

function getStepContent(activeStep: number, handleNext: () => void) {
  switch (activeStep) {
    case 0:
      return <FormOne handleNext={handleNext} />;
    case 1:
      return <FormTwo handleNext={handleNext} />;
    case 2:
      return <FormThree handleNext={handleNext} />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>

          <Success handleReset={handleReset}/>
           
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep, handleNext)}</Typography>
            
            </div>
          )}
      </div>
    </div>
  );
}