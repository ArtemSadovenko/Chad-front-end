import React, { useState } from "react";
import SignUpForm from "../../components/forms/mobile/SignUpForm";
import ConnectMailForm from "../../components/forms/mobile/ConnectMailForm";
import ConnectStoreForm from "../../components/forms/mobile/ConnectStoreForm";
import DontUseEmail from "../../components/forms/mobile/DontUseEmail";
import DontUseShopifyForm from "../../components/forms/mobile/DontUseShopifyForm";
import StoreConnected from "../../components/forms/mobile/StoreConnected";
import ReceivedForm from "../../components/forms/mobile/ReceivedForm";
import { AuthState } from "../../types/AuthStatusType";
import { Box, LinearProgress } from "@mui/material";
import MobileStepper from "../../components/MobileStepper";
import ChadIcon from "../../common/ChadIcon";

enum Steps {
  First = 25,
  Second = 50,
  Third = 75,
  Last = 100,
}

function MobileLayout() {
  const [activeStep, setActiveStep] = useState(25);
  const [formState, setFormState] = useState<AuthState>(AuthState.SignUp);
  const [showPreloader, setShowPreloader] = useState(false);
  const [isDisplayHeader, setIsDisplayHeader] = useState(true);

  const handleNext = () => {
    setActiveStep(activeStep + 25);
  };

  const handleHideHeader = () => {
    setIsDisplayHeader(false);
  };

  const handleShowHeader = () => {
    setIsDisplayHeader(true);
  };

  const handleFirst = () => {
    if (activeStep != Steps.Last) {
      setActiveStep(25);
    }
  };

  const handleBack = () => {
    if (activeStep != Steps.First) {
      setActiveStep(activeStep - 25);
    }
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
            handleHideHeader={handleHideHeader}
          />
        );
      case AuthState.DontUseEmail:
        return (
          <DontUseEmail
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
            handleHideHeader={handleHideHeader}
          />
        );
      case AuthState.DontUseShopify:
        return (
          <DontUseShopifyForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
            handleHideHeader={handleHideHeader}
          />
        );
      case AuthState.StoreConected:
        return (
          <StoreConnected
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
            handleShowHeader={handleShowHeader}
          />
        );
      case AuthState.ReceivedResponce:
        return (
          <ReceivedForm
            handleAuthStateChanged={handleAuthStateChanged}
            handleBack={handleBack}
            handleNext={handleNext}
            handleFirst={handleFirst}
            handleShowHeader={handleShowHeader}
          />
        );
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box
        sx={{
          p: "12px 32px 12px 32px",
        }}
      >
        {isDisplayHeader ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ChadIcon size={42} />
              <h1 style={{ marginBottom: "6px", marginTop: "6px" }}>Chad</h1>
            </Box>
            <h4
              style={{
                marginBottom: "6px",
                marginTop: "6px",
                color: "#C9D3E0",
              }}
            >
              Step {activeStep / 25} of 4
            </h4>
            <MobileStepper
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        ) : null}

        {renderForm()}
      </Box>
    </Box>
  );
}

export default MobileLayout;
