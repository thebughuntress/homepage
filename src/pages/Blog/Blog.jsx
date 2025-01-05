import React from "react";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import { Box, Typography } from "@mui/material";
import content from "../../data/content";

const Blog = () => {
  return (
    <Box sx={{ width: "80vw", marginBottom: 0 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontFamily: "Leckerli One, cursive",
          color: "primary.main",
          marginTop: 2,
          marginBottom: 2,
          flex: 1,
        }}
      >
        Programming Classes
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
        {content &&
          content.length > 0 &&
          content.map((post, index) => (
            <BlogPreview post={post} key={index} />
          ))}
      </Box>
    </Box>
  );
};

export default Blog;
