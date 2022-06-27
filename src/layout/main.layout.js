import React from "react";
import { Box, Container } from "@mui/material";
import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
          height: 'auto',
          marginTop: '6rem'
        }}
      >
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
