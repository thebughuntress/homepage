import { Box, Typography } from "@mui/material";
import React from "react";

const QuoteBox = ({
  quote = "Technology is best when it brings people together.",
  author = "Matt Mullenweg",
  color = "primary.dark",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginY: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "75%", md: "50%" },
          color: `${color}`,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "20px", md: "26px" },
            fontWeight: 500,
            marginBottom: 1,
            textAlign: "start",
          }}
        >
          {quote}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "right",
            marginRight: 2,
          }}
        >
          {author}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteBox;
