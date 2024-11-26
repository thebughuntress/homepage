import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { FaReact, FaCoffee } from "react-icons/fa";
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
            fontSize: "50px",
            color: "#61DAFB",
            animation: "rotate 5s linear infinite",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#3DD1E7",
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          Crafted with React &{" "}
          <FaCoffee style={{ fontSize: "17px", verticalAlign: "middle" }} />{" "}
          <br />
          View the source code{" "}
          <Link
            href="https://github.com/thisisalicee/homepage"
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
        © {new Date().getFullYear()} Antonia Frey. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
