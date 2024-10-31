import React from 'react'
import { AuthState } from '../../../types/AuthStatusType';
import { Button, Paper } from '@mui/material';
import checkedImg from "../../../common/CheckMarl.png"
interface FormProps {
    handleAuthStateChanged: (state: AuthState) => void;
    handleNext: () => void;
    handleBack: () => void;
    handleFirst: () =>void;
  }

function ReceivedForm(props: FormProps) {
  const handleClick = () => {
    props.handleFirst();
    props.handleAuthStateChanged(AuthState.SignUp);
  };

  return (
    <Paper
    sx={{
      width: "30vw",
      height: "auto",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "64px 64px 64px 64px ",
    }}
  >
    <img src={checkedImg} style={{width: "80px"}}></img>
    <h2>Response received</h2>
    <p>Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform.</p> 
    <Button variant='contained' sx={{backgroundColor: "#32ABF2"}} onClick={handleClick}>Done</Button>

  </Paper>
  )
}

export default ReceivedForm
