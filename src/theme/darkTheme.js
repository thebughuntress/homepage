import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#dc1df5",
    },
    secondary: {
      main: "#5BE9B9",
    },
    background: {
      default: '#282828',
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "50px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "41px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "35px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "14px",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "12px",
      lineHeight: 1.43,
    },
  },
});

export default darkTheme;
