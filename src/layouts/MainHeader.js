import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";

function MainHeader() {
  const navigate = useNavigate();

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout(() => {
      navigate("/");
    });
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>

          <Typography
            variant="h6"
            color="inherit"
            component="div"
          >
            CoderStore
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {isAuthenticated ? (
            <>
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2 }}
              >
                Welcome {user?.username}!
              </Typography>

              <Button
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;