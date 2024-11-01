import { Box, Grid2 } from "@mui/material";
import React, { useState } from "react";
import { StepsType } from "../../types/StepsType";
import CustomStepper from "../../components/Stepper";
import { AuthState } from "../../types/AuthStatusType";
import SignUpForm from "../../components/forms/desktop/SignUpForm";
import ConnectMailForm from "../../components/forms/desktop/ConnectMailForm";
import ConnectStoreForm from "../../components/forms/desktop/ConnectStoreForm";
import DontUseEmail from "../../components/forms/desktop/DontUseEmail";
import DontUseShopifyForm from "../../components/forms/desktop/DontUseShopifyForm";
import StoreConnected from "../../components/forms/desktop/StoreConnected";
import ReceivedForm from "../../components/forms/desktop/ReceivedForm";

const steps: StepsType = [
  {
    label: "Welcome",
  },
  {
    label: "Connect Your Shopify store",
  },
  {
    label: "Connect your customer support email",
  },
  {
    label: "Done",
  },
];

function DesktopLayout() {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState<AuthState>(AuthState.SignUp);
  const [showPreloader, setShowPreloader] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFirst = () =>{
    setActiveStep(0)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAuthStateChanged = (state: AuthState) => {
    setShowPreloader(true);
    setFormState(state);
    setShowPreloader(false);
  };

  const renderForm = () => {
    switch (formState) {
      case AuthState.SignUp:
        return (
          <SignUpForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case AuthState.ConnectMail:
        return (
          <ConnectMailForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case AuthState.ConnectShopify:
        return (
          <ConnectStoreForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case AuthState.DontUseEmail:
        return (
          <DontUseEmail
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case AuthState.DontUseShopify:
        return (
          <DontUseShopifyForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case AuthState.StoreConected:
        return (
          <StoreConnected
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
        case AuthState.ReceivedResponce:
        return (
          <ReceivedForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
            handleFirst = {handleFirst}
          />
        );
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Grid2 container>
        <Grid2 size={{ md: 4, lg: 4 }}>
          <Box
            sx={{
              background:
                "linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%)",
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CustomStepper
              handleBack={handleBack}
              handleNext={handleNext}
              steps={steps}
              activeStep={activeStep}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ md: 8, lg: 8 }} sx={{ width: "60%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderForm()}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default DesktopLayout;
