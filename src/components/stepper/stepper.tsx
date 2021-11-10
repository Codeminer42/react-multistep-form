import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Steps } from "../../types";
import { stepsLibrary } from "../../utils/constants";

interface HorizontalStepperProps {
  activeStep: Steps;
}

const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  activeStep,
}) => {
  const isCurrentStep = stepsLibrary[activeStep].order;

  return (
    <>
      <Stepper activeStep={isCurrentStep} alternativeLabel>
        {Object.values(stepsLibrary).map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default HorizontalStepper;
