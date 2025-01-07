import { Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import cloudBgLight from "../../assets/hero2/cloud-bg-light.png";
import cloudBgDark from "../../assets/hero2/cloud-bg-dark.png";
import { useTheme } from "@mui/material/styles";
import githubIconBlack from "../../assets/hero2/github.png";
import linkedinIconBlack from "../../assets/hero2/linkedin.png";
import whatsappIconBlack from "../../assets/hero2/whatsapp.png";
import emailIconBlack from "../../assets/hero2/email.png";
import githubIconWhite from "../../assets/hero2/github_white.png";
import linkedinIconWhite from "../../assets/hero2/linkedin_white.png";
import whatsappIconWhite from "../../assets/hero2/whatsapp_white.png";
import emailIconWhite from "../../assets/hero2/email_white.png";
import { cv } from "../../data/contact";
import DownloadButton from "../DownloadButton/DownloadButton";
import { contact } from "../../data/contact";

function Hero2() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";

  const bgImg = isDarkTheme ? cloudBgDark : cloudBgLight;

  const icons = {
    github: isDarkTheme ? githubIconWhite : githubIconBlack,
    linkedin: isDarkTheme ? linkedinIconWhite : linkedinIconBlack,
    whatsapp: isDarkTheme ? whatsappIconWhite : whatsappIconBlack,
    email: isDarkTheme ? emailIconWhite : emailIconBlack,
  };



  const roles = ["Web Developer", "Cloud Engineer", "Tutor"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [role, setRole] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const curRole = roles[roleIndex];

    const typingInterval = setInterval(() => {
      if (charIndex < curRole.length) {
        setCharIndex((prevIndex) => prevIndex + 1);
        setRole((prevRole) => curRole.slice(0, charIndex + 1));
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          deleteRole();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [charIndex, roleIndex]);

  const deleteRole = () => {
    const curRole = roles[roleIndex];
    let deleteIndex = curRole.length;

    const deletingInterval = setInterval(() => {
      setRole((prevRole) => curRole.slice(0, deleteIndex - 1));
      deleteIndex--;

      if (deleteIndex === 0) {
        setRole("");
        clearInterval(deletingInterval);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setCharIndex(0);
      }
    }, 100);
  };

  const sxContactButton = {
    p: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "92vh", md: "90vh" },
        width: "100vw",
        position: "relative",
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Box
        sx={{
          textAlign: "start",
          paddingTop: { xs: "40%", md: "10%" },
          paddingLeft: "8%",
          maxWidth: { xs: "90%", md: "45%" },
        }}
      >
        {/* Text Box */}
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: { xs: 600, md: 500 },
            }}
          >
            Hi, I'm Antonia
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: { xs: 600, md: 500 },
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              marginY: 1,
              height: { xs: "48px", md: "64px" },
            }}
          >
            {role}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              fontSize: { xs: "14px", md: "20px" },
              maxWidth: { xs: "90%", md: "80%" },
            }}
          >
            I build software and teach programming. <br />
            Currently, I work remotely as a Full-Stack Software Engineer .
          </Typography>
        </Box>

        {/* Contact Box */}
        <Box sx={{ marginTop: 2, display: "flex", gap: 2 }}>
          {/* GitHub Button */}
          <IconButton
            sx={sxContactButton}
            component="a"
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icons.github}
              alt="GitHub"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>

          {/* LinkedIn Button */}
          <IconButton
            sx={sxContactButton}
            component="a"
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icons.linkedin}
              alt="LinkedIn"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>

          {/* WhatsApp Button */}
          <IconButton
            sx={sxContactButton}
            component="a"
            href={contact.mobile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icons.whatsapp}
              alt="WhatsApp"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>

          {/* Email Button */}
          <IconButton
            sx={sxContactButton}
            component="a"
            href={contact.email.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icons.email}
              alt="WhatsApp"
              style={{ marginTop: 10, width: 40, height: "auto" }}
            />
          </IconButton>
        </Box>
        <Box sx={{ my: 3 }}>
          <DownloadButton
            label="Download CV"
            url={cv.url}
            //pathToFile={cv.path}
            downloadFileName={cv.filename}
            color="primary.main"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero2;
