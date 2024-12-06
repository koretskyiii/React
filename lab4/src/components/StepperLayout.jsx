import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";

const steps = ["Поверх №1", "Поверх №2", "Поверх №3"];

const StepperLayout = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
        navigate(activeStep === 0 ? "step2" : "step3");
      }
    };

    const handleBack = () => {
      if (activeStep > 0) {
        setActiveStep((prev) => prev - 1);
        navigate(activeStep === 1 ? "/" : "step2");
      }
    };
  
    return (
      <Box width="90%" mr={"auto"} ml={"auto"}>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box display={"flex"} justifyContent={"center"} border="1px solid #1591ea">
           <Outlet /> 
        </Box>
  
        <Box display="flex" justifyContent="space-around" sx={{ mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    );
  };

  export default StepperLayout;