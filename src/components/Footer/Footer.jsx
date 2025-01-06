import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { FaReact, FaCoffee } from "react-icons/fa";
import { repo } from "../../data/contact";
import muiLogo from "../../assets/mui.svg";
import midjourneyLogo from "../../assets/midjourney-logo.svg";
import devicesLightThemeImg from "../../assets/devices-light-theme.svg";
import devicesDarkThemeImg from "../../assets/devices-dark-theme.svg";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import ContactSection from "../ContactSection/ContactSection";
import BuyMeACoffee from "../BuyMeACoffee/BuyMeACoffee";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import QuoteBox from "../QuoteBox/QuoteBox";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";
  const imageSrc = isDarkTheme ? devicesDarkThemeImg : devicesLightThemeImg;

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          marginTop: 10,
        }}
      >
        <Box
          textAlign="center"
          component="img"
          src={imageSrc}
          alt="devicesImg"
          loading="eager"
          sx={{
            width: { xs: "80%", md: "40%" },
          }}
        />
      </Box>
      {isHome && <ContactSection />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "primary.dark",
          padding: "20px 0 10px 0",
          margin: 0,
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Box sx={{ width: "80%", textAlign: "center", marginY: 3 }}>
          <QuoteBox />
          <BuyMeACoffee coffeeVersion={true} />

          <Box sx={{ marginY: 2 }}>
            <a
              href="https://www.react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReact
                style={{
                  marginTop: "1.2rem",
                  marginBottom: 5,
                  fontSize: "40px",
                  color: "#61DAFB",
                  animation: "rotate 5s linear infinite",
                }}
              />
            </a>
            <Typography
              variant="body2"
              sx={{
                color: "#3DD1E7",
              }}
            >
              Crafted by <b>Antonia Alice Frey </b>
              <br />
              Made with React &{" "}
              <FaCoffee
                style={{ fontSize: "14px", verticalAlign: "middle" }}
              />{" "}
              <br />
              Using{" "}
              <Box
                component="img"
                src={muiLogo}
                alt="MUI Logo"
                sx={{
                  height: "14px",
                  verticalAlign: "middle",
                  marginRight: "1px",
                  marginLeft: "1px",
                }}
              />{" "}
              Material UI
              <br />
              View the source code{" "}
              <Link
                href={repo.url}
                target="_blank"
                sx={{
                  color: "#3DD1E7",
                  textDecoration: "underline",
                  textDecorationColor: "#3DD1E7",
                }}
              >
                here
              </Link>
            </Typography>
          </Box>

          <Box>
            <a
              href="https://www.midjourney.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={midjourneyLogo}
                alt="Midjourney Logo"
                sx={{
                  height: "65px",
                  verticalAlign: "middle",
                  marginBottom: "-5px",
                }}
                style={{
                  marginTop: "1.2rem",
                  marginBottom: 1,
                  fontSize: "40px",
                  color: "#61DAFB",
                  //animation: "wave-animation 5s ease-in-out infinite",
                }}
              />
            </a>
            <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
              Images generated using Midjourney AI
              <br />
              if no other source is given.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#FFFF",
            }}
          >
            Version: <span> {APP_VERSION}</span>
          </Typography>
          <Tooltip
            title="Timestamp of latest deploy on Firebase"
            placement="right"
            arrow
          >
            <IconButton
              sx={{
                display: { xs: "none", md: "flex" },
                p: 0,
                margin: 0.5,
                fontSize: "small",
                color: "#FFFF",
                alignItems: "center",
              }}
            >
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "white",
            wordWrap: "break-word",
            fontSize: "12px",
            marginBottom: 1,
          }}
        >
          © {new Date().getFullYear()} Antonia Alice Frey. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
