import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const skills = [
  {
    name: "Web Development",
    value: 90,
    technologies: [
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "JSON Server",
      "Bootstrap",
      "Tailwind CSS",
      "CSS",
      "Styles",
      "Components",
      "Material UI",
      "Angular",
      "Standard Libraries (e.g., math, datetime, os, sys)",
    ],
  },
  {
    name: "Python",
    value: 85,
    technologies: [
      "Django",
      "File I/O",
      "Modules and Packages",
      "Error Handling",
      "OOP",
      "NumPy",
      "Pandas",
      "Tkinter",
      "Sockets",
      "BeautifulSoup (Web Scraping)",
      "CSV (Working with CSV Files)",
    ],
  },
  {
    name: "Java",
    value: 60,
    technologies: [
      "Foundations (Syntax, Data Structures, OOP)",
      "Automating testing with Selenium",
    ],
  },
  {
    name: "Git",
    value: 95,
    technologies: ["GitHub", "GitLab (CI/CD Pipelines)", "Bitbucket"],
  },
  {
    name: "Cloud (AWS/GCP)",
    value: 65,
    technologies: ["EC2", "S3", "Cloud Functions", "Firebase", "MongoDB Atlas"],
  },
  {
    name: "Excel/VBA",
    value: 80,
    technologies: [
      "Formulas",
      "Formatting",
      "Plotting",
      "Pivot Tables",
      "VBA Scripting",
    ],
  },
];

const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.main",
        paddingTop: 3,
        paddingX: { xs: 3, md: "10rem" },
        paddingBottom: 5,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          paddingTop: 5,
          fontSize: { xs: "25px", md: "35px" },
          color: "white",
        }}
      >
        Experience
      </Typography>

      {/* Skills section layout */}
      <Box sx={{ paddingY: 2 }}>
        {skills.map((skill, index) => (
          <Box key={index} sx={{ marginBottom: 5 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                color: "white",
                marginBottom: 1,
              }}
            >
              {skill.name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "10px",
              }}
            >
              {skill.technologies.join(", ")}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={{
                height: 7,
                backgroundColor: "primary.dark",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "secondary.main",
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
