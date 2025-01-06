import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "../../data/classes";
import {
  Typography,
  Box,
  CircularProgress,
  Card,
  CardMedia,
  Divider,
} from "@mui/material";
import BlogContent from "../../components/BlogContent/BlogContent";

const BlogPost = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const blogPost = classes.find((post) => post.id == postId);
      setPost(blogPost);
      setLoading(false);
    }, 500);
  }, [postId]);

  useEffect(() => {
    document.body.scrollTop = 0;
  }, [postId]);

  const handleImageLoad = () => {
    setImageLoaded(true); // Update state when image is loaded
  };

  if (loading) {
    // If loading is true, show the loading spinner
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    // If no post is found, show an error message
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "text.primary",
        }}
      >
        <Typography variant="h5" color="error">
          Post not found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      maxWidth="md"
      sx={{
        marginTop: 6,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginBottom: 5,
        mx: "auto",
        px: { xs: 2, sm: 3 },
        maxWidth: { xs: "85%", md: "100%" },
      }}
    >
      {/* Blog Post Image */}
      {post.imageUrl && (
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              margin: "0 auto",
              width: "100%",
              maxWidth: "700px",
            }}
          >
            <CardMedia
              component="img"
              alt={post.title}
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "700px",
                maxHeight: "467px",
                objectFit: "cover",
                filter: imageLoaded ? "none" : "blur(10px)",
                transition: "filter 0.3s ease",
              }}
              image={post.imageUrl}
              title={post.title}
              onLoad={handleImageLoad}
            />
          </Card>
        </Box>
      )}

      {/* Post Title */}
      <Box sx={{ marginTop: 2 }}>
        <Typography
          variant="h3"
          sx={{ color: "text.primary", fontWeight: "bold", marginBottom: 2 }}
        >
          {post.title}
        </Typography>
      </Box>

      {/* Author and Date */}
      <Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: "italic" }}
        >
          By {post.author} {post.date && `| ${post.date}`}
        </Typography>
      </Box>

      {/* Divider */}
      <Box sx={{ marginY: 2 }}>
        <Divider />
      </Box>

      {/* Post Content */}
      {post.content.length === 0 ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          Coming soon!
        </Typography>
      ) : (
        <BlogContent content={post.content} />
      )}
    </Box>
  );
};

export default BlogPost;
