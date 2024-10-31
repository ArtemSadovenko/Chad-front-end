import React, { useState } from "react";
import { AuthState } from "../../../types/AuthStatusType";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import ChadIcon from "../../../common/ChadIcon";

interface FormProps {
  handleAuthStateChanged: (state: AuthState) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const listEmails = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "zoho.com",
  "gmx.com",
  "qq.com",
  "rediffmail.com",
];

function DontUseEmail(props: FormProps) {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [isSelectError, setIsSelectError] = useState(false);

  const handleClick = () => {
    if (selectedEmail == "") {
      setIsSelectError(true);
    } else {
      props.handleAuthStateChanged(AuthState.ReceivedResponce);
    }
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
        <h2>Chad</h2>
      </Box>
      <h2 style={{ margin: "0" }}>Dont use Gmail?</h2>
      <p>
        Chad Beta is currently only integrated with Gmail. We’ll send you an
        email when Chad becomes compatible with your support ticket platform.
      </p>

      <FormControl sx={{ paddingBottom: "24px" }}>
        <Select
          error={isSelectError}
          value={selectedEmail}
          onChange={(event) => {
            setSelectedEmail(event.target.value);
          }}
        >
          <MenuItem value="" disabled>
            Select an Email
          </MenuItem>
          {listEmails.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ background: "#32ABF2" }}
      >
        Submit
      </Button>
      <Box sx={{ display: "flex" }}>
        <p>Actually use Gmail? &nbsp; </p>
        <a>
          <p
            style={{ color: "#32ABF2", cursor: "pointer" }}
            onClick={() => {
              props.handleAuthStateChanged(AuthState.ConnectMail);
            }}
          >
            Connect
          </p>
        </a>
      </Box>
    </Paper>
  );
}

export default DontUseEmail;
