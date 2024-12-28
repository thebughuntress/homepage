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

  // List of cert objects
  const certifications = [
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
      name: "Professional Python Programmer Level 1",
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
    <Box sx={{ marginY: "4rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "25px", md: "35px" },
          fontWeight: 600,
          textAlign: "center",
          color: "text.primary",
          p: 2,
        }}
      >
        Certifications
      </Typography>

      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 2rem 1.5rem 2rem",
          gap: 4,
        }}
      >
        {certifications.map((cert, index) => (
          <Link
            key={index}
            href={`https://www.credly.com/badges/${cert.id}/public_url`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Card
              key={index}
              sx={{
                width: { xs: "60vw", md: 215 },
                height: 280, // Set consistent height
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 1,
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                borderColor: "text.primary",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={cert.imgUrl}
                alt={cert.name}
                sx={{
                  objectFit: "contain",
                  backgroundColor: "transparent",
                  padding: "1rem",
                }}
              />
              <CardContent>
                <Typography variant="h6">{cert.name}</Typography>
              </CardContent>
              {/* Footer Section */}
              <CardActions
                sx={{
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
                  Issued by{" "}
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none" }}
                  >
                    {cert.issuedBy}
                  </Link>
                </Typography>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BadgeCollection;
