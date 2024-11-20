import { Box, Typography } from "@mui/material";
import React from "react";

const QuoteBox = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          width: { xs: "85%", md: "50%" },
          margin: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {xs: "25px", md: "30px"},
            fontStyle: "italic",
            color: "#08494b",
            my: 2,
          }}
        >
          "Technology is best when it brings people together."
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "right",
            color: "#08494b",
            fontSize: "0.8rem",
          }}
        >
          Matt Mullenweg
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteBox;
