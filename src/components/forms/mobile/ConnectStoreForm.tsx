import { AuthState } from "../../../types/AuthStatusType";
import {
  Box,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Typography,
  ListItemText
} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import ChadIcon from "../../../common/ChadIcon";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";

interface FormProps {
  handleAuthStateChanged: (state: AuthState) => void;
  handleNext: () => void;
  handleBack: () => void;
  handleHideHeader: () => void;
}

function ConnectStoreForm(props: FormProps) {
  const [isDone, setIsDone] = useState(false);
  const [isProccedBiosnessLogic, setIsProccedBiosnessLogic] = useState(false);

  const handleClick = () => {
    setIsProccedBiosnessLogic(true);
    setIsDone(true)

    setTimeout(() => {
      props.handleHideHeader()
    props.handleAuthStateChanged(AuthState.StoreConected);
    }, 3000);

  };

  return (
    <>
           <h2 >Connect your Shopify store</h2>
       <p>
         Installs the Chad widget in your Shopify store and sets it up to display
         your customers’ order information and self-serve options.
       </p>

       <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#F8F9FC", marginBottom:"12px" }}>
         <ListItem alignItems="flex-start" sx={{ m: "0", paddingBottom: "0" }}>
           <ListItemIcon>
             <DoneIcon sx={{ color: "green" }} />
           </ListItemIcon>
           <ListItemText
             primary="Track orders and shipping"
             secondary={
               <React.Fragment>
                 {"Global coverage with 600+ couriers supported"}
               </React.Fragment>
             }
           />
         </ListItem>

         <ListItem alignItems="flex-start">
           <ListItemIcon>
             <DoneIcon sx={{ color: "green" }} />
           </ListItemIcon>
           <ListItemText
             primary="Manage orders"
             secondary={
               <React.Fragment>
                 {
                   "Allow customers to track, return, exchange, or report problems with their orders"
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
             primary="Process returns and exchanges"
             secondary={
               <React.Fragment>
                 {
                   "Automatically checks your store policy and existing inventory before resolving or escalating each request"
                 }
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
         <Box sx={{display:"flex", flexDirection:"column"}}>
           <Button
             onClick={handleClick}
             variant="contained"
             sx={{ background: "#32ABF2" }}
           >
             Connect store
           </Button>
           <Button onClick={()=> props.handleAuthStateChanged(AuthState.DontUseShopify)} variant="text">
             I don't use Shopify
           </Button>
         </Box>
       )}
       </>
  );
}

export default ConnectStoreForm;
