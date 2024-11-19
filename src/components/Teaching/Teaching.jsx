import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import CustomBox from "../../components/CustomBox/CustomBox";
import WeekPlanner from "../../components/WeekPlanner/WeekPlanner";
import topics from "./data.jsx";

const Teaching = () => {
  return (
    <Box
      sx={{
        gap: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* SECTION: TOPICS */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2f1f70",
          width: "75%",
          padding: 10,
          my: 10,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 0, background: "transparent" }}
        >
          <Table
            aria-label="custom styled table"
            sx={{
              "& .MuiTableCell-root": {
                color: "white",
                borderLeft: "1px dashed white",
                borderBottom: "none",
              },
              "& .MuiTableCell-root:last-child": {
                borderRight: "1px dashed white",
              },
              "& .MuiPaper-root": {
                background: "none",
              },
            }}
          >
            <TableHead>
              <TableRow>
                {topics.map((topic) => (
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {/* Display the icon */}
                    <Box>{topic.icon}</Box>
                    <Typography variant="h6">{topic.title}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {topics.map((topic, index) => (
                  <TableCell align="center" key={index}>
                    {topic.description}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* SECTION: CALENDAR */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#08494b",
          py: 5,
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: "white", fontSize: "28px" }}
          gutterBottom
        >
          Learn Programming. Start Today.
        </Typography>
        <WeekPlanner />
      </Box>

      {/* SECTION: ABOUT ME */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
        }}
      >
        <CustomBox sx={{ width: "65%" }}>
          {/* Main line */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Grad, serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: "2.25rem",
              marginBottom: 0,
              letterSpacing: 0,
              color: "rgb(46, 46, 46)",
              textAlign: "inherit",
              marginTop: 0,
              boxSizing: "border-box",
            }}
          >
            Software engineer by day, teacher by night.
          </Typography>

          {/* Reason for teaching */}
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "1.25rem",
              marginBottom: 0,
              letterSpacing: 0,
              color: "rgb(46, 46, 46)",
              textAlign: "inherit",
              marginTop: 0,
              boxSizing: "border-box",
            }}
          >
            "I teach because I have always had great teachers who inspired and
            guided me. Their passion for teaching, dedication, and belief in my
            potential made a lasting impact on me. I want to give back what they
            gave me—to help others discover their strengths, ignite their
            curiosity, and achieve their goals. Just as they shaped my path, I
            hope to inspire and empower my students to reach their full
            potential."
            <Divider sx={{ my: 3 }} />
            By day, I work as a programmer in an IT consulting company, where I
            have worked on various projects, including web development, cloud,
            and testing. In addition to my work, I have also earned various IT
            certifications in Python and Cloud Engineering. My favorite
            programming language is Python.
          </Typography>
        </CustomBox>
      </Box>
    </Box>
  );
};

export default Teaching;
