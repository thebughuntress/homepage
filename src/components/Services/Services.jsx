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
import superprofImg from "../../assets/superprof.svg";

const TOPICS = [
  "Programming Fundamentals",
  "Python",
  "Java",
  "JavaScript",
  "WebDev: HTML, CSS",
  "Deploying",
  "Versioning with Git",
  "LaTex",
  "Matlab",
  "Excel",
];

const Services = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          margin: 2,
          width: "95%",
          backgroundColor: "#750b2b",
          color: "white",
          padding: { xs: 1, md: "15px 15px 8px 15px" },
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            Teaching & Freelancing
          </Typography>
        </Box>

        <Accordion
          sx={{
            backgroundColor: "#8b213d",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
                    sx={{ color: "white", marginRight: "7px", fontSize: "16px" }}
                  />
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
            <Chip
              sx={{ marginTop: 2, color: "white" }}
              label="25 Euro / Hour"
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "#8b213d",
            color: "white",
            width: "100%",
            marginBottom: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Freelancing
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I provide freelance services in the field of IT.
            </Typography>
            <Chip
              sx={{ marginTop: 2, color: "white" }}
              label="Price upon request."
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
