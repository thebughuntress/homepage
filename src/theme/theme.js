import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6E9FFF",
    },
    secondary: {
      main: "#A4C8FF",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontFamily: "DM Serif Text, sans-serif",
      fontSize: "3.5em",
      fontWeight: 300,
      lineHeight: 1.3,
      marginTop: 0,
      marginBottom: 0,
    },
    h2: {
      fontFamily: "DM Serif Text, sans-serif",
      fontSize: "3em",
      fontWeight: 300,
      lineHeight: 1.3,
      marginTop: 0,
      marginBottom: 0,
    },
    h3: {
      fontFamily: "DM Serif Text, sans-serif",
      fontSize: "2.5em",
      fontWeight: 300,
      lineHeight: 1.3,
      marginTop: 0,
      marginBottom: 0,
    },
    h4: {
      fontFamily: "DM Serif Text, sans-serif",
      fontSize: "2em",
      fontWeight: 300,
      lineHeight: 1.3,
      marginTop: 0,
      marginBottom: 0,
    },
    h5: {
      fontFamily: "DM Serif Text, sans-serif",
      fontSize: "1.5em",
      fontWeight: 300,
      lineHeight: 1.3,
      marginTop: 0,
      marginBottom: 0,
    },
    h6: {
      fontFamily: "DM Serif Text, sans-serif",
      fontSize: "1.25em",
      fontWeight: 300,
      lineHeight: 1.3,
      marginTop: 0,
      marginBottom: 0,
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
  },
});

export default theme;
