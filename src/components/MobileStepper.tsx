import { Box, LinearProgress } from '@mui/material';
import React from 'react'


interface CustomStepperProps {
    activeStep: number;
    handleNext: () => void;
    handleBack: () => void;
  }

function MobileStepper(props: CustomStepperProps) {
  return (

    <Box
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "#C9D3E0"
    }}
  >

    <LinearProgress
      variant="determinate"
      value={props.activeStep}
      color="inherit"
      sx={{
        width: "100%",
        height: "8px",
        border: "solid 1px",
        borderRadius: "5px",
        backgroundColor: "white",
        
      }}
    ></LinearProgress>
  </Box>
  )
}

export default MobileStepper
