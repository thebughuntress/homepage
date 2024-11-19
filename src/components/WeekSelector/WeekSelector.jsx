import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { format, addWeeks, startOfWeek, endOfWeek, getWeek } from "date-fns";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const WeekSelector = ({ disablePast = false }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  // Helper function to calculate the week range
  const getWeekRange = (date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const end = endOfWeek(date, { weekStartsOn: 1 });
    return `${format(start, "d.MMMM")} - ${format(end, "d.MMMM")}`;
  };

  const weekNumber = getWeek(currentDate);

  const handlePrevWeek = () => {
    setCurrentDate(addWeeks(currentDate, -1));
  };

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={0}
      sx={{ my: 0, width: "100%" }}
    >
      <Button
        variant="contained"
        onClick={handlePrevWeek}
        disabled={false}
        sx={{
          boxShadow: "none",
          fontSize: "18px",
          minWidth: "50px",
          height: "4rem",
          width: "5%",
          backgroundColor: "black",
          borderRadius: "4px 0 0 4px",
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          flex: 1, // Take the rest of the space
          backgroundColor: "black",
          color: "white",
          px: 3,
          height: "4rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "white",
          }}
        >{`Week ${weekNumber}`}</Typography>
        <Typography
          sx={{
            fontSize: "11px",
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {getWeekRange(currentDate)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={handleNextWeek}
        disabled={false}
        sx={{
          boxShadow: "none",
          fontSize: "18px",
          minWidth: "50px",
          height: "4rem",
          width: "5%",
          backgroundColor: "black",
          borderRadius: "0 4px 4px 0",
        }}
      >
        <ChevronRightIcon sx={{ fontSize: "2.5rem" }} />
      </Button>
    </Box>
  );
};

export default WeekSelector;
