import React from "react";
import { Box, Button } from "@mui/material";

interface StepperControllerProps {
  handleBack: () => void;
  handleNext: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}

const StepperController: React.FC<StepperControllerProps> = ({
  handleBack,
  handleNext,
  isLastStep,
  isFirstStep,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        color="inherit"
        disabled={isFirstStep}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button onClick={handleNext} sx={{ mr: 1 }}>
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </Box>
  );
};

export default StepperController;
