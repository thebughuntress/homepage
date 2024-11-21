import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton } from "@mui/material";
import React from "react";

const ContactButtons = ({ color }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {/* LinkedIn Button */}
      <IconButton
        href="https://www.linkedin.com/in/antonia-alice-frey/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        sx={{ color }}
      >
        <LinkedInIcon />
      </IconButton>

      {/* GitHub Button */}
      <IconButton
        href="https://github.com/thisisfrey"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        sx={{ color }}
      >
        <GitHubIcon />
      </IconButton>

      {/* Email Button */}
      <IconButton
        href="mailto:antonia.frey@outlook.com"
        aria-label="Email"
        sx={{ color }}
      >
        <EmailIcon />
      </IconButton>

      {/* WhatsApp Button */}
      <IconButton
        href="https://wa.me/4915146782868"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        sx={{ color }}
      >
        <WhatsAppIcon />
      </IconButton>
    </Box>
  );
};

export default ContactButtons;
