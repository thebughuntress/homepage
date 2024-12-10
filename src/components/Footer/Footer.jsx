import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { FaReact, FaCoffee } from "react-icons/fa";
import { urls } from "../../data/data";
import muiLogo from "../../assets/mui.svg";
import devicesImg from "../../assets/devices.svg";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import Contact from "../Contact/Contact";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Box
          textAlign="center"
          component="img"
          src={devicesImg}
          alt="devicesImg"
          loading="eager"
          sx={{
            width: { xs: "90%", md: "60%" },
          }}
        />
      </Box>
      {isHome && <Contact />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "primary.dark",
          //backgroundColor: "#A0A0A5", // gray
          padding: "10px 0 10px 0",
          margin: 0,
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Box sx={{ width: "80%", textAlign: "center" }}>
          <FaReact
            style={{
              marginBottom: 5,
              fontSize: "35px",
              color: "#61DAFB",
              animation: "rotate 5s linear infinite",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#3DD1E7",
            }}
          >
            Crafted by <b>Antonia Alice Frey </b>
            <br />
            Made with React &{" "}
            <FaCoffee
              style={{ fontSize: "14px", verticalAlign: "middle" }}
            />{" "}
            <br />
            Using{" "}
            <Box
              component="img"
              src={muiLogo}
              alt="MUI Logo"
              sx={{
                height: "14px",
                verticalAlign: "middle",
                marginRight: "1px",
                marginLeft: "1px",
              }}
            />{" "}
            Material UI
            <br />
            View the source code{" "}
            <Link
              href={urls.repo}
              target="_blank"
              sx={{
                color: "#3DD1E7",
                textDecoration: "underline",
                textDecorationColor: "#3DD1E7",
              }}
            >
              here
            </Link>
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "white",
            wordWrap: "break-word",
            fontSize: "12px",
            marginTop: 4,
            marginBottom: 1,
            
          }}
        >
          © {new Date().getFullYear()} Antonia Alice Frey. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
