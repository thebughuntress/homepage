import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import superprofImg from "../../assets/superprof.svg";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { contact } from "../../data/contact";

const TOPICS = [
  "Programming Fundamentals",
  "Python",
  "Java",
  "JavaScript, TypeScript",
  "WebDev: React, Vue, HTML, CSS",
  "Deployment",
  "Versioning with Git",
  "LaTex",
  "Matlab",
  "Excel",
];

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.main",
        paddingY: 5,
        paddingX: { xs: 3, md: "20rem" },
        color: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          paddingY: 3,
          fontSize: { xs: "25px", md: "35px" },
          color: "white",
        }}
      >
        Teaching & Freelancing
      </Typography>

      <Box sx={{ gap: 3 }}>
        <Accordion
          sx={{
            backgroundColor: "primary.dark",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                color: "white",
                marginBottom: 1,
              }}
            >
              Programming Classes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ width: "100%", height: "40px" }}>
              <Box
                component="img"
                src={superprofImg}
                alt="superprofImg"
                sx={{
                  width: "130px",
                  height: "auto",
                }}
              />
            </Box>
            <Typography sx={{ mb: 1, color: "white" }}>
              Programming classes (online) for all levels, beginner to advanced.
            </Typography>
            <List>
              {TOPICS.map((topic, index) => (
                <ListItem sx={{ padding: "2px" }} key={index}>
                  <CheckCircleIcon
                    sx={{
                      color: "white",
                      marginRight: "7px",
                      fontSize: "16px",
                    }}
                  />
                  <ListItemText
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "white",
                    }}
                    primary={topic}
                  />
                </ListItem>
              ))}
            </List>
            <Chip
              icon={<MonetizationOnIcon />}
              sx={{
                marginRight: 1,
                color: "white",
                backgroundColor: "primary.light",
                "& .MuiChip-icon": {
                  color: "white",
                },
              }}
              label="25 Euro / Hour"
            />
            <Chip
              icon={<PlaceIcon />}
              label="Discord"
              sx={{
                marginRight: 1,
                color: "white",
                backgroundColor: "primary.light",
                "& .MuiChip-icon": {
                  color: "white",
                },
                "&:hover": {
                  backgroundColor: "primary.light", 
                  color: "white", 
                },
              }}
              onClick={() => {
                window.open(contact.discord.url, "_blank"); // Opens the URL in a new tab
              }}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "primary.dark",
            color: "white",
            width: "100%",
            marginBottom: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                color: "white",
                marginBottom: 1,
              }}
            >
              Freelancing
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mb: 1 }}>
              Freelance services in the field of IT.
            </Typography>
            <Chip
              sx={{
                marginTop: 2,
                color: "white",
                backgroundColor: "primary.light",
              }}
              label="Price upon request"
            />
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* <Divider sx={{ marginY: 3, borderColor: "white", borderWidth: "1px" }} /> */}

      <Typography
        variant="body1"
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        Kindly contact me for additional details.
      </Typography>
    </Box>
  );
};

export default Services;
