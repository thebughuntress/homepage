import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Divider, IconButton, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#A0A0A5",
        padding: "20px 0 10px 0",
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
          marginBottom: 3,
        }}
      />

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
      <Box sx={{ marginTop: 2, width: "80%", textAlign: "center" }}>
        <Typography variant="body2">
          The source code of this website is {" "}
          <Link
            href="https://github.com/thisisfrey/homepage"
            target="_blank"
            sx={{ color: "#3DD1E7" }}
          >
            here.
          </Link>
        </Typography>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: "black",
          wordWrap: "break-word",
          paddingTop: "12px",
          fontSize: "12px",
        }}
      >
        © {new Date().getFullYear()} Antonia Frey. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
