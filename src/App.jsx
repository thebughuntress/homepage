import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: "#f4f4f4",
          }}
        >
          <Navigation />
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
