import React from 'react'
import { AuthState } from '../../../types/AuthStatusType';
import { Box, Button, Paper } from '@mui/material';
import racconImage from "../../../common/raccoon.png"
interface FormProps {
  handleAuthStateChanged: (state: AuthState) => void;
  handleNext: () => void;
  handleBack: () => void;
}


function StoreConnected(props: FormProps) {
  const handleClick = () =>{
    props.handleNext()
    props.handleAuthStateChanged(AuthState.ConnectMail)
  }

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
    <img src={racconImage} style={{width: "80px"}}></img>
    <h2>Store connected</h2>
    <p>Chad is now able to manage customer support requests for [STORE-NAME].</p> 
    <Button variant='contained' sx={{backgroundColor: "#32ABF2"}} onClick={handleClick}>Continue</Button>
    <Box sx={{display:"flex", justifyContent:"center"}}>
    <p>Wrong Store? &nbsp;</p>
    <a style={{color: "#32ABF2"}}><p>Connect the other one</p></a>
    </Box>
  </Paper>
  )
}

export default StoreConnected
