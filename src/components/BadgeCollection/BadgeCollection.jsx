import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";
import React, { useEffect } from "react";

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
      imgUrl:
        "https://images.credly.com/size/340x340/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
      name: "Professional Scrum Master I (PSM I)",
      issuedBy: "Scrum.org",
      id: "7b5d324e-72a9-49da-943d-0e7fcbf835c4",
    },
    {
      imgUrl:
        "https://images.credly.com/size/340x340/images/37e26478-d80c-43e8-80eb-ec492f3a26c1/image.png",
      name: "Certified Professional Python Programmer Level 1",
      issuedBy: "Python Institute",
      id: "efb5b4b1-47f8-4cd3-b497-6ab45b427232",
    },
    {
      imgUrl:
        "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      name: "AWS Certified Cloud Practitioner",
      issuedBy: "AWS",
      id: "d7c6436d-91aa-4124-a530-67f185f6f372",
    },
    {
      imgUrl:
        "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      name: "Associate Cloud Engineer Certification",
      issuedBy: "Google Cloud",
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
        {/*  {badges.map((badge, index) => (
          <Box key={index}>
            <div
              data-iframe-width="230"
              data-iframe-height="300"
              data-share-badge-id={badge.id}
              data-share-badge-host="https://www.credly.com"
            ></div>
          </Box>
        ))} */}

        {badges.map((badge, index) => (
          <Link
            key={index}
            href={`https://www.credly.com/earner/earned/badge/${badge.id}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Card
              key={index}
              sx={{
                width: 345,
                height: 280, // Set consistent height
                margin: "1rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Ensure even spacing within the card
                alignItems: "center",
                boxShadow: "none",
                border: "1px solid gray",
                borderRadius: 5,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={badge.imgUrl}
                alt={badge.name}
                sx={{
                  objectFit: "contain",
                  backgroundColor: "transparent",
                  padding: "1rem",
                }}
              />
              <CardContent>
                <Typography variant="h6">{badge.name}</Typography>
              </CardContent>
              {/* Footer Section */}
              <CardActions
                sx={{
                  borderTop: "1px solid gray",
                  marginTop: "auto",
                  width: "100%",
                  padding: "0.5rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Issued by:{" "}
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none" }}
                  >
                    {badge.issuedBy}
                  </Link>
                </Typography>
              </CardActions>
            </Card>{" "}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BadgeCollection;
