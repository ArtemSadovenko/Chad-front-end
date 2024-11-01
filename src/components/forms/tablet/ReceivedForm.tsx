import React from 'react'
import { AuthState } from '../../../types/AuthStatusType';
import { Box, Button, Paper } from '@mui/material';
import checkedImg from "../../../common/CheckMarl.png"
interface FormProps {
    handleAuthStateChanged: (state: AuthState) => void;
    handleNext: () => void;
    handleBack: () => void;
    handleFirst: () =>void;
    handleShowHeader:() => void;
  }

function ReceivedForm(props: FormProps) {
  const handleClick = () => {
    props.handleFirst();
    props.handleShowHeader()
    props.handleAuthStateChanged(AuthState.SignUp);
  };

  return (
    <Box
    sx={{
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",

    }}
  >
    <img src={checkedImg} style={{width: "180px", marginTop:"5vh"}}></img>
    <h2>Response received</h2>
    <p style={{ textAlign: 'center' }}>Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform.</p> 
    <Button variant='contained' sx={{backgroundColor: "#32ABF2"}} onClick={handleClick}>Done</Button>

  </Box>
  )
}

export default ReceivedForm
