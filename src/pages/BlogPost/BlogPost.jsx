import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // for fetching dynamic URL parameters like postId
import blogPosts from "../../data/blogPosts";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const blogPost = blogPosts.find((post) => post.id == postId);
      setPost(blogPost);
      setLoading(false);
    }, 500);
  }, [postId]);

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
      }}
    >
      {/* Blog Post Image */}
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
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <CardMedia
            component="img"
            alt={post.title}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "cover",
            }}
            image={post.imageUrl}
            title={post.title}
          />
        </Card>
      </Box>

      {/* Post Title */}
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
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
