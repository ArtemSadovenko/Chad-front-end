import React, { useState } from 'react'
import { StepsType } from '../../types/StepsType';
import SignUpForm from "../../components/forms/mobile/SignUpForm";
import ConnectMailForm from "../../components/forms/mobile/ConnectMailForm";
import ConnectStoreForm from "../../components/forms/mobile/ConnectStoreForm";
import DontUseEmail from "../../components/forms/mobile/DontUseEmail";
import DontUseShopifyForm from "../../components/forms/mobile/DontUseShopifyForm";
import StoreConnected from "../../components/forms/mobile/StoreConnected";
import ReceivedForm from "../../components/forms/mobile/ReceivedForm";
import { AuthState } from '../../types/AuthStatusType';

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

function MobileLayout() {
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
    <div>
      Mobile
    </div>
  )
}

export default MobileLayout
