import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { FaDiscord } from "react-icons/fa";
import DownloadButton from "../DownloadButton/DownloadButton";

const Contact = () => {
  const contactItems = [
    {
      icon: <Email />,
      text: "antonia.frey@outlook.com",
      link: "mailto:antonia.frey@outlook.com",
    },
    {
      icon: <Phone />,
      text: "+49 1514 6782868",
      link: "https://wa.me/4915146782868",
    },
    {
      icon: <GitHub />,
      text: "thisisalicee",
      link: "https://github.com/thisisalicee",
    },
    {
      icon: <LinkedIn />,
      text: "Antonia Frey",
      link: "https://www.linkedin.com/in/antonia-alice-frey/",
    },
    {
      icon: <FaDiscord />,
      text: "thisisalice",
      link: "https://discord.com/users/1138415841344503899",
    },
    {
      icon: <LocationOn />,
      text: "Freiburg, Germany",
      onClick: () => {
        window.open(
          "https://www.google.com/maps/place/Freiburg,+Germany",
          "_blank"
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        paddingTop: 3,
        alignItems: { xs: "center", md: "start" },
        paddingLeft: { xs: 0, md: "10%" },
      }}
    >
      {/* Left Side: Contact */}
      <Box sx={{ width: { xs: "80%", md: "50%" } }}>
        <Typography variant="h2">Contact</Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "16px", md: "18px" } }}
        >
          Talking is better in person
        </Typography>
      </Box>

      {/* Right Side: Contact Info */}
      <Box
        sx={{
          width: { xs: "80%", md: "50%" },
          padding: { xs: 3, md: 0 },
        }}
      >
        {/* Contact List */}
        <List>
          {contactItems.map((item, index) => (
            <ListItem key={index} sx={{ padding: "2px" }}>
              <IconButton
                color="inherit"
                href={item.link}
                onClick={item.onClick || undefined}
                target={item.link ? "_blank" : undefined}
              >
                {item.icon}
              </IconButton>
              <ListItemText
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: { xs: "16px", md: "18px" },
                  },
                }}
                primary={
                  item.link ? (
                    <Link href={item.link} color="inherit" target="_blank">
                      {item.text}
                    </Link>
                  ) : (
                    item.text
                  )
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ backgroundColor: "red", display: { xs: "flex", md: "none" } }}>
        <DownloadButton
          label="Download CV"
          pathToFile="/downloads/cv.pdf"
          downloadFileName="cv.pdf"
          color="#FFF"
        />
      </Box>
    </Box>
  );
};

export default Contact;
