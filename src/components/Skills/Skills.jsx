import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const skillsList = [
  { name: "Web Development", value: 90 },
  { name: "Python", value: 85 },
  { name: "Java", value: 60 },
  { name: "Git", value: 95 },
  { name: "Cloud (AWS/GCP)", value: 65 },
  { name: "Excel/VBA", value: 80 },
  { name: "Machine Learning", value: 55 },
];

const Skills = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        padding: { xs: 3, md: "2rem 10rem 2rem 10rem" },
      }}
    >
      {/* Center the Skills heading */}
      <Box
        sx={{
          textAlign: "left",
          marginBottom: 6,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Professional Skills
        </Typography>
      </Box>

      {/* Skills section layout */}
      <Box>
        {skillsList.map((skill, index) => (
          <Box key={index} sx={{ marginBottom: 3 }}>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: 1 }}
            >
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={{
                height: 7,
                backgroundColor: "primary.dark", 
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#85ff5b", 
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
