import { useTheme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import MobileLayout from "./authenticator/MobileLayout";
import DesktopLayout from "./authenticator/DesktopLayout";
import TabletLayout from "./authenticator/TabletLayout";

enum customBreakpoints{
    mobile = 426,
    tablet = 769
}


function Authenticator() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down(customBreakpoints.mobile));
    const isTablet = useMediaQuery(theme.breakpoints.between(customBreakpoints.mobile, customBreakpoints.tablet));
    const isDesktop = useMediaQuery(theme.breakpoints.up(customBreakpoints.tablet));
  

  return <Box sx={{
    width:"100vw",
    height:"100vh"
  }}>
    {isMobile && <MobileLayout/>}
    {isDesktop && <DesktopLayout/>}
    {isTablet && <TabletLayout/>}
  </Box>;
}

export default Authenticator;
