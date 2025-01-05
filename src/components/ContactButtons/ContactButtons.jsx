import React from "react";
import { Box, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { contacts, urls, cv } from "../../data/data";

const ContactButtons = ({ color }) => {
  // Declare iconStyle properly
  const iconStyle = { fontSize: { xs: "25px", md: "30px", lg: "35px" } };

  // List of social media/contact buttons data
  const contactInfo = [
    {
      label: "LinkedIn",
      icon: <LinkedInIcon sx={iconStyle} />,
      link: urls.linkedin,
    },
    {
      label: "GitHub",
      icon: <GitHubIcon sx={iconStyle} />,
      link: urls.github,
    },
    {
      label: "Email",
      icon: <EmailIcon sx={iconStyle} />,
      link: `mailto:${contacts.email}`,
    },
    {
      label: "WhatsApp",
      icon: <WhatsAppIcon sx={iconStyle} />,
      link: urls.whatsapp
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
          sx={{
            color
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default ContactButtons;
