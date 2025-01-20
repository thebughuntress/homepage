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
import cvPdf from "../../assets/pdf/cv.pdf";

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

  const roles = [
    "Software Engineer",
    "Python Programmer",
    "Web Developer",
    "Cloud Engineer",
    "Tutor",
  ];
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
        justifyContent: "center",
        alignItems: { xs: "center", md: "start" },
        minHeight: {
          xs: "92vh",
          md: "calc(100vh - 64px)",
          lg: "calc(100vh - 75px)",
        },
        width: "100vw",
        position: "relative",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          //backgroundColor: {xs: "blue",md: "red", lg: "green", xl: "yellow" },
          textAlign: "start",
          paddingLeft: { xs: 0, md: "20vw" },
          maxWidth: { xs: "90%", md: "45%" },
        }}
      >
        {/* Text Box */}
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              fontSize: { xs: "32px", md: "48px", lg: "54px", xl: "56px" },
              fontWeight: { xs: 600, md: 600 },
            }}
          >
            Hi, I'm Antonia
          </Typography>
          <Typography
            variant="h1"
            sx={{
              marginY: 1,
              color: "primary.main",
              fontSize: { xs: "32px", md: "48px", lg: "54px", xl: "56px" },
              fontWeight: { xs: 600, md: 600 },
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              height: { xs: "48px", md: "64px", xl: "75px" },
            }}
          >
            {role}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginY: 2,
              color: "text.primary",
              fontSize: { xs: "16px", md: "18px", lg: "24px" },
              maxWidth: { xs: "95%", md: "75%", xl: "70%" },
            }}
          >
            I build software and teach programming. Currently, I work remotely
            as a Software Engineer.
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
            <Box
              component="img"
              src={icons.github}
              alt="GitHub"
              sx={{ height: { xs: "40px", md: "50px" }, width: "auto" }}
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
            <Box
              component="img"
              src={icons.linkedin}
              alt="LinkedIn"
              sx={{ height: { xs: "40px", md: "50px" }, width: "auto" }}
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
            <Box
              component="img"
              src={icons.whatsapp}
              alt="WhatsApp"
              sx={{ height: { xs: "40px", md: "50px" }, width: "auto" }}
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
            <Box
              component="img"
              src={icons.email}
              alt="Email"
              sx={{ height: { xs: "40px", md: "50px" }, width: "auto", mt: 1 }}
            />
          </IconButton>
        </Box>
        <Box sx={{ my: 3 }}>
          <DownloadButton
            label="Download CV"
            color="primary.main"
            url={cv.url}
            downloadFileName={cv.filename}
            fallbackFile={cvPdf}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero2;
