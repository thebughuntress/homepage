import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { FaReact, FaCoffee } from "react-icons/fa";
import { urls } from '../../data/data';

import "./Footer.css";

const Footer = () => {
  return (
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
      <Divider
        sx={{
          borderColor: "white",
          borderWidth: "1px",
          width: "90%",
          marginTop: 3,
          marginBottom: 3,
        }}
      />

      <Box sx={{ marginTop: 2, width: "80%", textAlign: "center" }}>
        <FaReact
          style={{
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
            src="https://mui.com/static/logo.png"
            alt="Material UI Logo"
            sx={{
              height: "16px",
              verticalAlign: "middle",
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
          paddingTop: "15px",
          fontSize: "12px",
        }}
      >
        © {new Date().getFullYear()} Antonia Alice Frey. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
