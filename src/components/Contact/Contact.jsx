import React from "react";
import { Box, Grid2, Typography, IconButton, Link } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

const Contact = () => {
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
        paddingLeft: { xs: "30%", md: "11%" },
      }}
    >
      {/* Left Side: Contact  */}
      <Box sx={{ width: { xs: "80%", md: "50%" } }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Contact
        </Typography>
        <Typography variant="body1">Talking is better in person</Typography>
      </Box>

      {/* Right Side: Contact Info */}
      <Box
        sx={{
          width: { xs: "80%", md: "50%" },
          padding: { xs: 3, md: 0 },
        }}
      >
        {/* Address */}
        <Box display="flex" alignItems="center" marginBottom={1}>
          <IconButton color="inherit">
            <LocationOn />
          </IconButton>
          <Typography variant="body1">Freiburg, Germany</Typography>
        </Box>

        {/* Email */}
        <Box display="flex" alignItems="center" marginBottom={1}>
          <IconButton color="inherit">
            <Email />
          </IconButton>
          <Typography variant="body1">
            <Link href="mailto:antonia.frey@outlook.com" color="inherit">
              antonia.frey@example.com
            </Link>
          </Typography>
        </Box>

        {/* Phone */}
        <Box display="flex" alignItems="center" marginBottom={1}>
          <IconButton color="inherit">
            <Phone />
          </IconButton>
          <Typography variant="body1">+49 1514 6782868</Typography>
        </Box>

        {/* LinkedIn */}
        <Box display="flex" alignItems="center" marginBottom={1}>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/antoniafrey/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <Typography variant="body1">
            <Link
              href="https://www.linkedin.com/in/thisisfrey/"
              color="inherit"
              target="_blank"
            >
              Antonia Alice Frey
            </Link>
          </Typography>
        </Box>

        {/* GitHub */}
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            href="https://github.com/antoniafrey"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <Typography variant="body1">
            <Link
              href="https://github.com/antoniafrey"
              color="inherit"
              target="_blank"
            >
              thisisfrey
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
