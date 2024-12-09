import React from "react";
import { Box, Typography } from "@mui/material"; // Make sure to import necessary components

const BlogContent = ({ content }) => {
  return content.map((block, index) => {
    // Switch for other content types (code, heading, etc.)
    switch (block.type) {
      case "step":
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Correct alignment
              marginBottom: 2,
            }}
          >
            {/* Number and Label Row */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* Circle with the number */}
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "#fff",
                  fontWeight: "bold",
                  marginRight: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {block.number}
                </Typography>
              </Box>

              {/* Step Label */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                {block.label}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                marginLeft: "calc(24px + 8px)",
              }}
            >
              {block.description}
            </Typography>
          </Box>
        );
      case "link":
        return (
          <Typography
            key={index}
            variant="h6"
            sx={{ fontWeight: "bold", marginTop: 2, marginBottom: 1 }}
          >
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#0000EE" }}
            >
              {block.label}
            </a>{" "}
            {block.description && (
              <Typography
                variant="caption"
                display="block"
                sx={{ marginTop: 1 }}
              >
                {block.description}
              </Typography>
            )}
          </Typography>
        );
      case "heading":
        return (
          <Typography
            key={index}
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: 3, marginBottom: 1 }}
          >
            {block.value}
          </Typography>
        );
      case "paragraph":
        return (
          <Typography
            key={index}
            variant="body1"
            sx={{ lineHeight: 1.8, marginBottom: 2 }}
          >
            {block.value}
          </Typography>
        );
      case "code":
        return (
          <Box
            key={index}
            sx={{
              backgroundColor: "#f5f5f5",
              padding: 2,
              borderRadius: 1,
              marginY: 1,
              fontFamily: "monospace",
            }}
          >
            <pre>
              <code className={`language-${block.language}`}>
                {block.value}
              </code>
            </pre>
          </Box>
        );
      case "image":
        return (
          <Box
            key={index}
            sx={{
              textAlign: { xs: "left", md: "left" },
              marginY: 3,
              marginX: 1,
              maxWidth: "100%" ,
            }}
          >
            <img
              src={block.url}
              alt={block.caption}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            {block.caption && (
              <Typography
                variant="caption"
                display="block"
                sx={{ marginTop: 1 }}
              >
                {block.caption}
              </Typography>
            )}
          </Box>
        );
      default:
        return null;
    }
  });
};

export default BlogContent;
