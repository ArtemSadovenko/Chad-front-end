import { Stepper, Step, StepLabel } from "@mui/material";
import { StepsType } from "../types/StepsType";

interface CustomStepperProps {
  activeStep: number;
  steps: StepsType;
  handleNext: () => void;
  handleBack: () => void;
}

function CustomStepper({
  activeStep,
  steps,
  handleNext,
  handleBack,
}: CustomStepperProps) {
  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      sx={{
        marginTop: "10vh",
        "& .MuiStepLabel-label": {
          fontSize: "1.2em",
          color: "white",
        },
        "& .MuiStepIcon-root": {
          fontSize: "2rem",
        },
      }}
    >
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel
            componentsProps={{
              label: { style: { color: "white" } },
            }}
          >
            {step.label}
          </StepLabel>
          {/* <StepContent>
            <Typography>{step.description}</Typography>
            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
              <Button
                disabled={index === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
            </Box>
          </StepContent> */}
        </Step>
      ))}
    </Stepper>
  );
}

export default CustomStepper;
