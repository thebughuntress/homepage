import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cv } from "../../data/contact";
import DownloadButton from "../DownloadButton/DownloadButton";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navigation.css";

export const sxButton = {
  fontSize: { xs: "14px", md: "22px" },
  fontWeight: 600,
  color: { xs: "primary.main", md: "text.primary" },
  border: { xs: `2px solid`, md: "none" },
  borderColor: { xs: "primary.main" },
  borderRadius: { xs: 50 },
  height: "37px",
  cursor: { md: "pointer" },
  justifyContent: { xs: "center" },
  width: { xs: "fit-content" },
  textTransform: "none",
  "&:hover": {
    color: "primary.main",
    backgroundColor: "transparent",
  },
  //fontFamily: "Leckerli One, cursive",
};

function Navigation({ isDarkMode, onThemeToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isBlog = location.pathname === "/classes";
  const isBlogPost = location.pathname.includes("/classes/");

  return (
    <AppBar
      position="static"
      sx={{
        height: { xs: "8vh", md: "10vh" },
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: { xs: 0, md: "5rem" },
          }}
        >
          <Typography
            variant="h3"
            className="nav-title"
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "Arial, sans-serif",
              mr: 2,
              fontSize: { xs: "30px", md: "1.8rem", lg: "2rem" },
              fontWeight: 500,
              color: "primary.main",
              cursor: isHome ? "default" : "pointer",
              transition: "color 0.3s",
              "&:hover": {
                color: isHome ? "primary.main" : "primary.dark",
              },
            }}
          >
            antonia<b>frey</b>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DownloadButton
              label="Download CV"
              url={cv.url}
              //pathToFile={cv.path}
              downloadFileName={cv.filename}
              color="primary.main"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 0,
            mr: { xs: 1, md: "5rem" },
          }}
        >
          {isHome && (
            <>
              <Button
                onClick={() => navigate("classes")}
                sx={{
                  ...sxButton,
                }}
              >
                Classes
              </Button>
            </>
          )}

          {isBlog && (
            <Button
              onClick={() => navigate("/")}
              sx={sxButton}
              startIcon={
                <ArrowBackIosIcon
                  sx={{ marginLeft: 1, marginRight: "-10px" }}
                />
              }
            >
              Home
            </Button>
          )}

          {isBlogPost && (
            <Button
              onClick={() => navigate("/classes")}
              sx={sxButton}
              startIcon={
                <ArrowBackIosIcon
                  sx={{ marginLeft: 1, marginRight: "-10px" }}
                />
              }
            >
              Classes
            </Button>
          )}

          <ThemeToggle isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
