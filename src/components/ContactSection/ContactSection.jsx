import React from "react";
import { Box, Typography } from "@mui/material";
import DownloadButton from "../DownloadButton/DownloadButton";
import { cv } from "../../data/contact";
import ContactButtons from "../ContactButtons/ContactButtons";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "85%",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "start" },
          my: 5,
        }}
      >
        {/* Left Side: Contact */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, marginBottom: "2rem" }}>
          <Box sx={{marginBottom: 5}}>
            <Typography variant="h2">Contact</Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: "normal",
              }}
            >
              Talking is better in person
            </Typography>
          </Box>
          <ContactButtons showLabel={true} flexDirection="column" />
        </Box>

        {/* Right Side:  Contact Form */}
        <ContactForm />

        <Box sx={{ display: { xs: "flex", md: "none", marginTop: "2rem" } }}>
          <DownloadButton
            label="Download CV"
            url={cv.url}
            pathToFile={cv.path}
            downloadFileName={cv.filename}
            color="#FFF"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
