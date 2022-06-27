import React from "react";
import { AppBar, IconButton, styled, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarNav = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgb(127, 206, 201)",
}));

const Navigation = () => {
  const AppToolbar = () => {
    return (
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>{" "}
        Utak.io
      </Toolbar>
    );
  };

  return <AppBarNav>{AppToolbar()}</AppBarNav>
};

export default Navigation;
