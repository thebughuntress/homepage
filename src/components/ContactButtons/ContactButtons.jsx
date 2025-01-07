import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { contact, cv } from "../../data/contact";

const ContactButtons = ({
  color = "white",
  showLabel = false,
  flexDirection = "row",
  iconShadow = false,
}) => {
  // Declare iconStyle properly
  const iconStyle = {
    fontSize: showLabel
      ? { xs: "20px", md: "25px" }
      : { xs: "25px", md: "35px" },
    filter: iconShadow ? "drop-shadow(4px 4px 8px #000)" : "none",
  };

  const contacts = [
    {
      label: contact.linkedin.label,
      icon: <LinkedInIcon sx={iconStyle} />,
      url: contact.linkedin.url,
    },
    {
      label: contact.github.label,
      icon: <GitHubIcon sx={iconStyle} />,
      url: contact.github.url,
    },
    {
      label: contact.email.label,
      icon: <EmailIcon sx={iconStyle} />,
      url: `mailto:${contact.email.url}`,
    },
    {
      label: contact.mobile.label,
      icon: <WhatsAppIcon sx={iconStyle} />,
      url: contact.mobile.url,
    },
    /* {
      label: contact.discord.label,
      icon: <FaDiscord />,
      url: contact.discord.url,
    },
    {
      label: contact.location.label,
      icon: <LocationOn />,
      url: contact.location.url,
    }, */
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "center",
        gap: flexDirection === "row" ? 3 : 0,
      }}
    >
      {contacts.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color,
            }}
          >
            {item.icon}
          </IconButton>
          {showLabel && (
            <Link
              href={item.url}
              target="_blank"
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "white", fontSize: { xs: "14px", md: "16px" } }}
              >
                {item.label}
              </Typography>
            </Link>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ContactButtons;
