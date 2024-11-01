import React, { useState } from 'react'

import { StepsType } from "../../types/StepsType";
import CustomStepper from "../../components/Stepper";
import { AuthState } from "../../types/AuthStatusType";
import SignUpForm from "../../components/forms/tablet/SignUpForm";
import ConnectMailForm from "../../components/forms/tablet/ConnectMailForm";
import ConnectStoreForm from "../../components/forms/tablet/ConnectStoreForm";
import DontUseEmail from "../../components/forms/tablet/DontUseEmail";
import DontUseShopifyForm from "../../components/forms/tablet/DontUseShopifyForm";
import StoreConnected from "../../components/forms/tablet/StoreConnected";
import ReceivedForm from "../../components/forms/tablet/ReceivedForm";
import { Box, Paper } from '@mui/material';
import ChadIcon from '../../common/ChadIcon';
import MobileStepper from '../../components/MobileStepper';

enum Steps {
  First = 25,
  Second = 50,
  Third = 75,
  Last = 100,
}

function TabletLayout() {
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
    <Box sx={{
      width:"100%",
      height:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
    <Paper
      sx={{
        maxHeight:"80%",
        maxWidth:"60%",
        height:"fit-content",
        p:"12px 32px 12px 32px",
        overflow: "auto"

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
    </Paper>
    </Box>
  )
}

export default TabletLayout
