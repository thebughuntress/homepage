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

const Contact = () => {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Freiburg,+Germany",
      "_blank"
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#A0A0A5",
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
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Contact
        </Typography>
        <Typography variant="body2">Talking is better in person</Typography>
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
          {/* Email */}
          <ListItem sx={{ padding: "2px" }}>
            <IconButton color="inherit" href="mailto:antonia.frey@outlook.com">
              <Email />
            </IconButton>
            <ListItemText
              primary={
                <Link href="mailto:antonia.frey@outlook.com" color="inherit">
                  antonia.frey@outlook.com
                </Link>
              }
            />
          </ListItem>

          {/* Phone */}
          <ListItem sx={{ padding: "2px" }}>
            <IconButton href="https://wa.me/4915146782868" color="inherit">
              <Phone />
            </IconButton>
            <ListItemText primary="+49 1514 6782868" />
          </ListItem>

          {/* LinkedIn */}
          <ListItem sx={{ padding: "2px" }}>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/antonia-alice-frey/"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <ListItemText
              primary={
                <Link
                  href="https://www.linkedin.com/in/antonia-alice-frey/"
                  color="inherit"
                  target="_blank"
                >
                  Antonia Alice Frey
                </Link>
              }
            />
          </ListItem>

          {/* GitHub */}
          <ListItem sx={{ padding: "2px" }}>
            <IconButton
              color="inherit"
              href="https://github.com/thisisfrey"
              target="_blank"
            >
              <GitHub />
            </IconButton>
            <ListItemText
              primary={
                <Link
                  href="https://github.com/thisisfrey"
                  color="inherit"
                  target="_blank"
                >
                  thisisfrey
                </Link>
              }
            />
          </ListItem>
          {/* Address */}
          <ListItem sx={{ padding: "2px" }}>
            <IconButton color="inherit" onClick={openGoogleMaps}>
              <LocationOn />
            </IconButton>
            <ListItemText primary="Freiburg, Germany" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Contact;
