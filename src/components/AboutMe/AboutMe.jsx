import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.main",
        paddingTop: 5,
        paddingX: { xs: 3, md: "20rem" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          paddingY: 3,
          fontSize: { xs: "25px", md: "35px" },
          color: "white",
        }}
      >
        Something About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "16px", md: "18px" },
          color: "white",
        }}
      >
        During my Electrical Engineering studies, I discovered my passion for IT
        and programming. Since graduating in 2020, I've worked as a software
        engineer, contributing to projects across various technologies and
        industries. I enjoy learning new programming languages, writing clean,
        robust code, and focusing on automation and design to simplify complex
        challenges.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <List sx={{ p: 0 }}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingY: 1,
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "space-between",
              }}
            >
              <SchoolIcon
                sx={{
                  color: "white",
                  marginRight: 2,
                  mt: "7px",
                  fontSize: "24px",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Master of Science
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  Electrical Engineering and Information Technology
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "white",
                    fontWeight: 300,
                  }}
                >
                  Karlsruhe Institute of Technology (KIT), 2020
                </Typography>
              </Box>
            </Box>
          </ListItem>

          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 1,
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "space-between",
                marginBottom: 1,
              }}
            >
              <SchoolIcon
                sx={{
                  color: "white",
                  marginRight: 2,
                  mt: "7px",
                  fontSize: "24px",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Bachelor of Science
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  Electrical Engineering and Information Technology
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "white",
                    fontWeight: 300,
                  }}
                >
                  Karlsruhe Institute of Technology (KIT), 2018
                </Typography>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AboutMe;
