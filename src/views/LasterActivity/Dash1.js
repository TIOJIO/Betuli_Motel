import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'sunday june 30 2022',
    description: `johnny and mohamed biology homework task to done`,
  },
  {
    label: 'sunday june 30 2022',
    description: 'johnny and mohamed biology homework task to done.',
  },
  {
    label: 'sunday june 30 2022',
    description: `johnny and mohamed biology homework task to done.`,
  },
];

const Smallsteps = [
  {
    title: 'sunday june 30 2022',
    description: `johnny and mohamed biology homework task to done.`,
  },
  {
    title: 'Monday june 30 2022',
    description: `johnny and mohamed biology homework task to done.`,
  },

];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>

    <p style={{fontWeight:'bold'}}>Today</p>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, backgroundColor:'green' }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 , color:'green'}}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 , backgroundColor:'green'}}>
            Reset
          </Button>

     
        </Paper>
      )}


     <p style={{fontWeight:'bold',padding:'30px 0px 0px 0px'}}>Yesterday</p>
          <Stepper    orientation="vertical" >
             {Smallsteps.map((label) => (
          <Step  key={label}>
            <StepLabel>{label.title}</StepLabel>
            <StepContent>{label.description}</StepContent>
          </Step>
        ))}
      </Stepper>

    </Box>
  );
}


