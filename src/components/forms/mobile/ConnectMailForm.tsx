import React, { useState } from 'react'
import { AuthState } from '../../../types/AuthStatusType';
import { Box, Button, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import ChadIcon from '../../../common/ChadIcon';
import DoneIcon from "@mui/icons-material/Done";
import GmailIcon from '../../../common/GmailIcon';
import { useNavigate } from 'react-router-dom';
interface FormProps {
  handleAuthStateChanged: (state: AuthState)=> void,
    handleNext: () => void;
    handleBack: () => void;
}

function ConnectMailForm(props:FormProps) {
  const [isDone, setIsDone] = useState(false);
  const [isProccedBiosnessLogic, setIsProccedBiosnessLogic] = useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    setIsProccedBiosnessLogic(true);
    setIsDone(true)
    setTimeout(() => {
      props.handleNext()
      navigate("/dashboard")
    setIsProccedBiosnessLogic(false);
    }, 3000);


  };

  return (
    <Paper
    sx={{
      width: "30vw",
      height: "auto",
      backgroundColor: "white",
      display: "flex",

      justifyContent: "center",
      flexDirection: "column",
      padding: "12px 32px 12px 32px ",
    }}
  >
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <ChadIcon />
      <h2 style={{}}>Chad</h2>
    </Box>
    <h2 style={{ margin: "0" }}>Connect your customer support email</h2>
    <p>
    Allows Chad to send automated responses on your behalf from your usual support mailbox
    </p>

    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
  

      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <DoneIcon sx={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText
          primary="Contextual responses"
          secondary={
            <React.Fragment>
              {
                "Custom responses to any support situation from “where’s my stuff?” to “I want a refund”"
              }
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <DoneIcon sx={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText
          primary="Reply from anywhere"
          secondary={
            <React.Fragment>
              {
                "Respond to your customers via email or Chad chat—it’s all saved in the same thread"
              }
            </React.Fragment>
          }
        />
      </ListItem>

      <ListItem alignItems="flex-start" sx={{ m: "0", paddingBottom: "0" }}>
        <ListItemIcon>
          <DoneIcon sx={{ color: "green" }} />
        </ListItemIcon>
        <ListItemText
          primary="Categorical inbox tags"
          secondary={
            <React.Fragment>
              {"Tags your emails by category so you know what to expect before even opening an email"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    {isProccedBiosnessLogic ? (
      <>
        <Button>Some business logic...</Button>
        <LinearProgress/>
        </>
    ): isDone?(<Button variant="text" >Done!</Button>): (
      <>
        <Button
        startIcon={<GmailIcon/>}
          onClick={handleClick}
          variant="contained"
          sx={{ background: "#5383EC" }}
        >
          Connect Gmail account
        </Button>
        <Button onClick={()=> props.handleAuthStateChanged(AuthState.DontUseEmail)} variant="text">
          I don't use Gmail
        </Button>
      </>
    )}
  </Paper>
  )
}

export default ConnectMailForm
