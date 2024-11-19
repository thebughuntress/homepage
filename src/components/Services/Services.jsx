import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
} from "@mui/material";
import superprofImg from "../../assets/superprof.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#750b2b",
        color: "white",
        width: "100%",
        padding: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          textAlign: "left",
          marginBottom: 2,
        }}
      >
        Teaching & Freelancing
      </Typography>

      <Accordion
        sx={{
          backgroundColor: "#8b213d",
          color: "white",
          width: "90%",
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
                width: "150px",
                height: "auto",
              }}
            />
          </Box>
          <Typography>
            Programming classes (online) for all levels, beginner to advanced.
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Price: 25 Euro / 60 minutes
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#8b213d",
          color: "white",
          width: "90%",
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
          <Typography>Freelancing services available.</Typography>
          <Typography sx={{ marginTop: 1 }}>Price upon request.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* <Divider sx={{ marginY: 3, borderColor: "white", borderWidth: "1px" }} /> */}

      <Typography
        variant="body1"
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        Get in touch for more information.
      </Typography>
    </Box>
  );
};

export default Services;
