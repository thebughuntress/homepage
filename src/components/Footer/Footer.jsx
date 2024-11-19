import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#DFDFE2",
        padding: "20px 0 10px 0",
        margin: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {/* LinkedIn Button */}
        <IconButton
          href="https://www.linkedin.com/in/antonia-alice-frey/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>

        {/* GitHub Button */}
        <IconButton
          href="https://github.com/thisisfrey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: "white" }}
        >
          <GitHubIcon />
        </IconButton>

        {/* Email Button */}
        <IconButton
          href="mailto:antonia.frey@outlook.com"
          aria-label="Email"
          sx={{ color: "white" }}
        >
          <EmailIcon />
        </IconButton>

        {/* WhatsApp Button */}
        <IconButton
          href="https://wa.me/4915146782868"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          sx={{ color: "white" }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{ color: "black", wordWrap: "break-word", paddingTop: "12px", fontSize: "12px" }}
      >
        © {new Date().getFullYear()} Antonia Frey. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
