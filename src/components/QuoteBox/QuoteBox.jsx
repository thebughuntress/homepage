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
          width: { xs: "85%", md: "fit-content" },
          margin: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {xs: "22px", md: "30px"},
            fontWeight: 700,
            //fontStyle: "italic",
            color: "primary.main",
            my: 2,
          }}
        >
          "Technology is best when it brings people together."
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            color: "primary.main",
          }}
        >
          Matt Mullenweg
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteBox;
