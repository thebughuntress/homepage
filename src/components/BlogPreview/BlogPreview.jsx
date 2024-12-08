import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import blogImg from "../../assets/blog.jpg";
import { useNavigate } from "react-router-dom";

const BlogPreview = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        boxShadow: 3,
        position: "relative",
        marginBottom: 1,
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
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
        }}
        image={post.imageUrl || blogImg}
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
