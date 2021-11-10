import React from "react";
import StepperController from "../components/stepper-controller/stepper-controler";
import HorizontalStepper from "../components/stepper/stepper";
import useMultistepNavigation from "../hooks/use-multistep-navigation";

const MultistepForm: React.FC = () => {
  const { activeStep, handleBack, handleNext, isLastStep, isFirstStep } =
    useMultistepNavigation();

  return (
    <>
      <HorizontalStepper activeStep={activeStep} />
      <StepperController
        handleBack={handleBack}
        handleNext={handleNext}
        isLastStep={isLastStep}
        isFirstStep={isFirstStep}
      />
    </>
  );
};

export default MultistepForm;
