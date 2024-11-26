import React from "react";
import { Box, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactButtons = ({ color }) => {
  // Declare iconStyle properly
  const iconStyle = { fontSize: { xs: "25px", md: "35px" } };

  // List of social media/contact buttons data
  const contactInfo = [
    {
      label: "LinkedIn",
      icon: <LinkedInIcon sx={iconStyle} />,
      link: "https://www.linkedin.com/in/antonia-alice-frey/",
    },
    {
      label: "GitHub",
      icon: <GitHubIcon sx={iconStyle} />,
      link: "https://github.com/thisisalicee",
    },
    {
      label: "Email",
      icon: <EmailIcon sx={iconStyle} />,
      link: "mailto:antonia.frey@outlook.com",
    },
    {
      label: "WhatsApp",
      icon: <WhatsAppIcon sx={iconStyle} />,
      link: "https://wa.me/4915146782868",
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {contactInfo.map((item) => (
        <IconButton
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          sx={{
            color,
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default ContactButtons;
