import { Box, Typography } from "@mui/material";
import React from "react";

const QuoteBox = ({
  quote = "Technology is best when it brings people together.",
  color = "white",
}) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginY: 2, }}
    >
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          width: { xs: "85%", md: "fit-content" },
          
          color: { color },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "22px", md: "30px" },
            fontWeight: 700,
            my: 2,
          }}
        >
          {quote}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
          }}
        >
          Matt Mullenweg
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteBox;
