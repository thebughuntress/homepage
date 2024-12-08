import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DownloadButton from "../DownloadButton/DownloadButton";
import "./Navigation.css";
import { cv } from "../../data/data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isBlog = location.pathname === "/blog";
  const isBlogPost = location.pathname.includes("/blog/");

  const sxButton = {
    fontSize: "14px",
    fontWeight: 600,
    color: { md: "black", xs: "primary.main" },
    border: { xs: `2px solid`, md: "none" },
    borderColor: { xs: "primary.main" },
    borderRadius: { xs: 100 },
    cursor: { md: "pointer" },
    justifyContent: { xs: "center" },
    width: { xs: "fit-content" },
    "&:hover": {
      color: { xs: "primary.main", md: "primary.main" },
      backgroundColor: { xs: "white", md: "transparent" },
    },
  };

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
        <Typography
          variant="h3"
          className="nav-title"
          onClick={() => navigate("/")}
          sx={{
            mr: 2,
            fontSize: { xs: "23px", md: "30px", lg: "35px" },
            fontWeight: 500,
            color: "primary.main",
            cursor: isHome ? "default" : "pointer",
            transition: "color 0.3s",
            "&:hover": {
              color: isHome ? "primary.main" : "primary.dark",
            },
          }}
        >
          Antonia Alice Frey
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexGrow: 0,
            mr: { xs: 4, md: "5rem" },
          }}
        >
          {isHome && (
            <>
              <Button onClick={() => navigate("blog")} sx={sxButton}>
                Blog
              </Button>
              <Box sx={{ display: { xs: "none", md: "inherit" } }}>
                <DownloadButton
                  label="Download CV"
                  url={cv.url}
                  pathToFile={cv.path}
                  downloadFileName={cv.filename}
                  color="primary.main"
                />
              </Box>
            </>
          )}
          {isBlog && (
            <Button
              onClick={() => navigate("/")}
              sx={sxButton}
              startIcon={
                <ArrowBackIosIcon sx={{ marginLeft: 1, marginRight: "-5px" }} />
              }
            >
              Home
            </Button>
          )}
          {isBlogPost && (
            <Button
              onClick={() => navigate("/blog")}
              sx={sxButton}
              startIcon={
                <ArrowBackIosIcon sx={{ marginLeft: 1, marginRight: "-5px" }} />
              }
            >
              Blogs
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
