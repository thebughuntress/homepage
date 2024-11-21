import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
//import Logo from "../../assets/logo.png";

const pages = [];

function Navigation() {
  const navigate = useNavigate();

  // Navigate to the selected page
  const navigateToPage = (route) => {
    navigate(route);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "8vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: { xs: "primary.main", md: "transparent" },
        boxShadow: {
          xs: 1,
          md: "none", 
        },
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {/*  <img
          src={Logo}
          alt="Logo"
          style={{
            height: "35px",
            marginRight: "20px",
          }}
        /> */}

        <Typography
          variant="h6"
          sx={{
            mr: 2,
            fontFamily: "Playwrite DE LA, cursive",
            fontWeight: 500,
            color: {xs: "white", md: "black"},
          }}
        >
          Antonia Alice Frey
        </Typography>

        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => navigateToPage(page.route)}
              sx={{
                my: 2,
                mx: 1,
                color: "white",
                display: "block",
                borderRadius: 0,
                textTransform: "none", 
                borderBottom: "1px solid transparent", 
                "&:hover": {
                  borderBottom: "1px solid #fff", 
                },
              }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
        {/*  <Box sx={{ flexGrow: 0, mr: "100px" }}>
          <ActionButton label="Anmelden" />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
