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
        margin: 0,
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          backgroundColor: "primary.main",
          color: "white",
          padding: 2,
          width: "85%",
          maxWidth: "1200px",
          margin: 0,
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "25px", md: "35px" },
            }}
          >
            Teaching & Freelancing
          </Typography>
        </Box>

        <Accordion
          sx={{
            backgroundColor: "primary.dark",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
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
            <Typography sx={{ mb: 1 }}>
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
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
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
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Freelancing
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: { xs: "16px", md: "18px" } }}>
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

        {/* <Divider sx={{ marginY: 3, borderColor: "white", borderWidth: "1px" }} /> */}

        <Typography
          variant="body2"
          sx={{
            marginTop: 2,
            textAlign: "center",
          }}
        >
          Kindly contact me for additional details.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;