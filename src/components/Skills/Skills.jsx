import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const skills = [
  {
    name: "Web Development",
    value: 90,
    technologies: [
      "React",
      "Vue",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
      "Tailwind CSS",
      "Styled Components",
      "Postman (API testing)",
      "Cypress with Cucumber",
      "JUnit",
      "JSON Server",
    ],
  },
  {
    name: "Python",
    value: 85,
    technologies: [
      "Django",
      "NumPy",
      "Pandas",
      "Tkinter",
      "OOP",
      "Standard Libraries (e.g., math, datetime, os, sys)",
      "File I/O",
      "Sockets",
      "CSV",
      "BeautifulSoup (Web Scraping)",
      "Error Handling",
    ],
  },
  {
    name: "Java",
    value: 60,
    technologies: [
      "Foundations (Syntax, Data Structures, OOP)",
      "Automating testing with Selenium",
      "JHipster",
    ],
  },

  {
    name: "Cloud (AWS/GCP)",
    value: 65,
    technologies: ["EC2", "S3", "Cloud Functions", "Firebase", "MongoDB Cloud"],
  },
  {
    name: "Agile Development",
    value: 95,
    technologies: [
      "SCRUM",
      "Jira",
      "Confluence",
      "Git (GitHub, BitBucket, GitLab)",
      "CI/CD Pipelines",
    ],
  },
  {
    name: "Excel/VBA",
    value: 80,
    technologies: ["Formulas", "Formatting", "Pivot Tables", "VBA Scripting"],
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
        paddingX: { xs: 3, md: "15rem" },
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
