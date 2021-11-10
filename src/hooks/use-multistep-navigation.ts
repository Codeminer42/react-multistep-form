import { useState } from "react";
import { Step, Steps } from "../types";
import { stepsLibrary } from "../utils/constants";

export const getStepsByOrder = (stepsLibrary: { [key in Steps]: Step }): {
  [key: number]: Steps;
} =>
  Object.keys(Steps).reduce((prev, stepId) => {
    const step = stepId as Steps;
    return { ...prev, [stepsLibrary[step].order]: step };
  }, {});

const useMultistepNavigation = () => {
  const [activeStep, setActiveStep] = useState(Steps.PersonalInformation);

  const stepsByOrder = getStepsByOrder(stepsLibrary);
  const currentStepNumber = stepsLibrary[activeStep].order;
  const isFirstStep = currentStepNumber === 0;

  const isLastStep = () => {
    const totalSteps = Object.keys(Steps).length - 1;

    return currentStepNumber >= totalSteps;
  };

  const handleBack = () => {
    const step = stepsByOrder[currentStepNumber - 1] as Steps;

    setActiveStep(step);
  };

  const handleNext = () => {
    const step = stepsByOrder[currentStepNumber + 1] as Steps;

    setActiveStep(step);
  };

  return {
    isFirstStep,
    isLastStep: isLastStep(),
    handleBack,
    handleNext,
    activeStep,
  };
};

export default useMultistepNavigation;
