import React from "react";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import { Box, Typography } from "@mui/material";
import portfolio from "../../data/portfolio";

const Portfolio = () => {
  return (
    <Box sx={{ width: "80vw", marginBottom: 0 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          //fontFamily: "Leckerli One, cursive",
          color: "primary.main",
          marginY: 5,
          flex: 1,
        }}
      >
        Work, Write, Create
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { sx: "100%", md: "80%" },
          margin: "0 auto",
          padding: 2,
          paddingBottom: "3rem",
        }}
      >
        {portfolio &&
          portfolio.length > 0 &&
          portfolio.map((post, index) => (
            <BlogPreview post={post} key={index} />
          ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
