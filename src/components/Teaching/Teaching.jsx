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
import WeekPlanner from "../../components/Teaching/WeekPlanner/WeekPlanner";
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
                {topics.map((topic, index) => (
                  <TableCell key={index} align="center" sx={{ fontWeight: "500" }}>
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
      ></Box>
    </Box>
  );
};

export default Teaching;
