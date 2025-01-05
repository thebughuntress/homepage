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
              alignItems: "flex-start",
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
                  color: "primary.main",
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
                color: "text.primary",
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
              style={{ textDecoration: "underline", color: "#61DAFB",}}
            >
              {block.label}
            </a>{" "}
            {block.description && (
              <Typography
                variant="caption"
                display="block"
                sx={{ color: "text.primary", marginTop: 1 }}
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
            sx={{
              fontWeight: "bold",
              marginTop: 3,
              marginBottom: 1,
              color: "text.primary",
            }}
          >
            {block.value}
          </Typography>
        );
      case "paragraph":
        return (
          <Typography
            key={index}
            variant="body1"
            sx={{ color: "text.primary", lineHeight: 1.8, marginBottom: 2 }}
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
              borderRadius: 1,
              fontFamily: "monospace",
              minWidth: "60%",
              width: "fit-content",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              p: 1
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
              display: "flex",
              flexDirection: "column",
              textAlign: { xs: "left", md: "left" },
              marginY: 3,
              width: "100%",
              height: "auto",
              maxHeight: "auto",
              maxWidth: "750px",
            }}
          >
            <img
              src={block.url}
              alt={block.caption}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <Typography variant="body2" color="text.secondary">
              Image source:{" "}
              <a
                href={block.url.match(/^https?:\/\/[^/]+/)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {block.url.replace(/https?:\/\/([^/]+).*/, "$1")}
              </a>
            </Typography>
            {block.caption && (
              <Typography
                variant="caption"
                display="block"
                sx={{ marginTop: 1, color: "text.primary" }}
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
