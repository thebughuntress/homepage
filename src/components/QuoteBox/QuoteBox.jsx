import React from "react";
import { Box, Typography } from "@mui/material";

const QuoteBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#08494b",
        padding: 3,
        borderRadius: 2,
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        width: "85%",
        margin: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontStyle: "italic",
          color: "white",
          my: 2,
        }}
      >
        "Technology is best when it brings people together."
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: "right",
          color: "white",
          fontSize: "1rem", 
        }}
      >
        Matt Mullenweg
      </Typography>
    </Box>
  );
};

export default QuoteBox;
