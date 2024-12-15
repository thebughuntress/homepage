import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./BadgeCollection.css";

const BadgeCollection = () => {
  useEffect(() => {
    // Dynamically load the Credly script for embedding badges
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // List of badge objects
  const badges = [
    {
      name: "Professional Scrum Master I (PSM I)",
      id: "7b5d324e-72a9-49da-943d-0e7fcbf835c4",
    },
    {
      name: "Certified Professional Python Programmer Level 1",
      id: "efb5b4b1-47f8-4cd3-b497-6ab45b427232",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      id: "d7c6436d-91aa-4124-a530-67f185f6f372",
    },
    {
      name: "Associate Cloud Engineer Certification",
      id: "4c6cef95-abb8-4a7f-acd9-467d0b6831f1",
    },
  ];

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          marginTop: "3rem",
          fontSize: { xs: "24px", md: "30px" },
          fontWeight: 600,
          textAlign: "center",
          color: "text.primary",
        }}
      >
        Badge Collection
      </Typography>

      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 2rem 1.5rem 2rem",
          gap: 5,
        }}
      >
        {badges.map((badge, index) => (
          <Box key={index}>
            <div
              data-iframe-width="230"
              data-iframe-height="300"
              data-share-badge-id={badge.id}
              data-share-badge-host="https://www.credly.com"
              data-custom-style="color:white;"
            ></div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BadgeCollection;
