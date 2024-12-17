import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BlogPreview = ({ post }) => {
  const imgPlaceholder =
    "https://cdn.midjourney.com/b5352e43-894a-4c91-aec5-19a21306cf35/0_1.png";
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        boxShadow: 3,
        position: "relative",
        marginBottom: 1,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.04)",
          cursor: "pointer",
          boxShadow: 6,
        },
      }}
      onClick={() => navigate(`${post.id}`, { replace: false })}
    >
      {/* Main Image Section */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 150 },
          objectFit: "cover",
          borderRadius: { xs: "0 0 8px 8px", md: "0" },
          display: "block",
          transition: "filter 0.3s ease", // smooth transition for blur removal
          filter: loaded ? "none" : "blur(10px)", // Apply blur if image is not loaded
        }}
        image={post.imageUrl || imgPlaceholder}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      {/* Text Content Section */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            {post.title || "Untitled Post"}
          </Typography>
          {post.subtitle && (
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
              {post.subtitle || "Untitled Post"}
            </Typography>
          )}
          <Typography variant="body2" sx={{ color: "gray", marginBottom: 1 }}>
            By {post.author || "Unknown Author"}
          </Typography>
          <Typography variant="body2">
            {post.summary || "No summary available."}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogPreview;
