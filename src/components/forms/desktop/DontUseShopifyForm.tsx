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

const listWebConstructors = [
  "Wix",
  "Squarespace",
  "Shopify",
  "WordPress.com",
  // "Tilda",    No Russian!
  "Weebly",
  "BigCommerce",
  "Webflow",
  "GoDaddy Website Builder",
  "Jimdo",
  "Zyro",
  "Strikingly",
  "Duda",
  "Carrd",
  "HubSpot CMS Hub",
];

function DontUseShopifyForm(props: FormProps) {
  const [selectedWebConstructors, setSelectedWebConstructors] = useState("");
  const [isSelectError, setIsSelectError] = useState(false)

  const handleClick = () => {
    if(selectedWebConstructors === ""){
      setIsSelectError(true)
    }
    else{
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
        <h2 style={{}}>Chad</h2>
      </Box>
      <h2 style={{ margin: "0" }}>Dont use Shopify?</h2>
      <p>
        Chad Beta is currently only available on Shopify. We’ll send you an
        email when Chad becomes available on your platform.
      </p>

      <FormControl sx={{paddingBottom:"24px"}}>
        <Select
        error= {isSelectError}
          value={selectedWebConstructors}
          onChange={(event) => {
            setSelectedWebConstructors(event.target.value);
          }}
        >
          <MenuItem value="" disabled>
            Select an constructor
          </MenuItem>
          {listWebConstructors.map((item) => (
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
        <p>Actually use Shopify? &nbsp; </p>
        
          <p
            style={{ color: "#32ABF2", cursor: "pointer" }}
            onClick={() => {
              props.handleAuthStateChanged(AuthState.ConnectShopify);
            }}
          >
            Connect
          </p>
        
      </Box>
    </Paper>
  );
}

export default DontUseShopifyForm;
