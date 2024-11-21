import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import BookingButton from "../BookingButton/BookingButton";
import WeekSelector from "../WeekSelector/WeekSelector";

const TIME_SLOTS = [
  { label: "08:00 - 09:00", isAvailable: true },
  { label: "09:00 - 10:00", isAvailable: true },
  { label: "10:00 - 16:00", isAvailable: false },
  { label: "16:00 - 17:00", isAvailable: true },
  { label: "17:00 - 18:00", isAvailable: true },
  { label: "18:00 - 19:00", isAvailable: true },
  { label: "19:00 - 20:00", isAvailable: true },
];

const DAYS_PER_WEEK = 7;

const generateAvailability = () => {
  return TIME_SLOTS.map((slot) =>
    Array.from({ length: DAYS_PER_WEEK }, () => slot.isAvailable)
  );
};

const availability = generateAvailability();

const WeekPlanner = () => {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 5
      }}
    >
      <WeekSelector disablePast={true} />
      <Box
        sx={{
          width: "100%",
          maxHeight: "70vh",
          height: "auto",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <Table
            sx={{
              tableLayout: "fixed",
              width: "100%",
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <TableCell
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    width: "12.5%",
                  }}
                >
                  Time Slot
                </TableCell>
                {weekdays.map((day, i) => (
                  <TableCell
                    key={i}
                    align="center"
                    sx={{
                      fontSize: "16px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "white",
                      borderLeft: "1px solid white",
                      width: "12.5%",
                    }}
                  >
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {TIME_SLOTS.map((slot, i) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:not(:last-child)": {
                      borderBottom: "1.5px dotted #ddd",
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      padding: "5px",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "12.5%",
                    }}
                  >
                    <Typography variant="body1" noWrap>
                      {slot.label}
                    </Typography>
                  </TableCell>
                  {weekdays.map((_, j) => (
                    <TableCell
                      key={j}
                      align="center"
                      sx={{
                        padding: "5px",
                        borderLeft: "1px solid #ddd",
                        backgroundColor: availability[i][j]
                          ? "white"
                          : "#bdbdbd",
                        minWidth: "12.5%",
                        width: "12.5%",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      {availability[i][j] ? (
                        <BookingButton label="Buchen" disabled={false} />
                      ) : (
                        <Typography variant="body1" sx={{ color: "white" }}>
                          N/A
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default WeekPlanner;
