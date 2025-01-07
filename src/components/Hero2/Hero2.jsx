import { Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import cloudBg from "../../assets/hero2/cloud-bg.png";
import githubIcon from "../../assets/hero2/github.png";
import linkedinIcon from "../../assets/hero2/linkedin.png";
import whatsappIcon from "../../assets/hero2/whatsapp.png";
import { cv } from "../../data/contact";
import DownloadButton from "../DownloadButton/DownloadButton";
import { contact } from "../../data/contact";

function Hero2() {
  const roles = ["Web Developer", "Cloud Engineer", "Tutor"];
  const [roleIndex, setRoleIndex] = useState(0); // Keeps track of which role we're typing
  const [role, setRole] = useState(""); // The current role being typed
  const [charIndex, setCharIndex] = useState(0); // The current character index being typed

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
        backgroundImage: `url(${cloudBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
            sx={{ fontWeight: "bold", fontSize: { xs: "32px", md: "48px" } }}
          >
            Hi, I'm Antonia
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: "bold",
              color: "primary.main",
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              marginY: 1,
              height: "4rem",
            }}
          >
            {role}
          </Typography>
          <Typography
            variant="body1"
            sx={{
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
              src={githubIcon}
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
              src={linkedinIcon}
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
              src={whatsappIcon}
              alt="WhatsApp"
              style={{ width: 40, height: 40 }}
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
