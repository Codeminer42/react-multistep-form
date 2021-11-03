import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button } from "@mui/material";

const steps = [
  "Personal Information",
  "Business Information",
  "Review & Submit",
];

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const lastStep = activeStep === steps.length - 1;

  const handleBack = () => {
    if (activeStep === 0) return;

    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleNext = () => {
    if (lastStep) return;

    setActiveStep((activeStep) => activeStep + 1);
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: "flex" }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          {lastStep ? "Finish" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default HorizontalStepper;
