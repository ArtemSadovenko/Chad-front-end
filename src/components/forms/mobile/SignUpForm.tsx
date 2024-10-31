import React, { useState } from "react";
import { AuthState } from "../../../types/AuthStatusType";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import ChadIcon from "../../../common/ChadIcon";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface FormProps {
  handleAuthStateChanged: (state: AuthState) => void;
  handleNext: () => void;
  handleBack: () => void;
}

function SignUpForm(props: FormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const isValid = () => {
    let result = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (password.length == 0) {
      result = false;
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (name.length == 0) {
      result = false;
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (emailRegex.test(email) && email.length != 0) {
      setEmailError(false);
    } else {
      result = false;
      setEmailError(true);
    }

    return result;
  };

  const handleClick = () => {
    // if (isValid()) {
    //   props.handleNext();
    //   props.handleAuthStateChanged(AuthState.ConnectShopify);
    // }
    props.handleNext();
    props.handleAuthStateChanged(AuthState.ConnectShopify);
  };

  return (


    <>
      <h2>Welcome to Chad</h2>
      <p>
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </p>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        error={emailError}
        sx={{
          m: "12px 0px 12px 0px ",
          width: "100%",
          backgroundColor: "#F8F9FC",
        }}
        label="Email"
        placeholder="magachad@trychad.com"
      ></TextField>
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        error={nameError}
        sx={{
          m: "12px 0px 12px 0px ",
          width: "100%",
          backgroundColor: "#F8F9FC",
        }}
        label="Your name"
        placeholder="Mega Chad"
      ></TextField>

      <FormControl
        variant="outlined"
        sx={{
          m: "12px 0px 12px 0px ",
          width: "100%",
          backgroundColor: "#F8F9FC",
        }}
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

        <OutlinedInput
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          error={passwordError}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment id="filled-adornment-password" position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ background: "#32ABF2", width:"100%", m:"12px 0px 0px 0px" }}
      >
        Create accaunt
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <p>Already have an account? &nbsp; </p>
        <a>
          <p style={{ color: "#32ABF2", cursor: "pointer" }}>Login</p>
        </a>
      </Box>
    </>
  );
}

export default SignUpForm;
