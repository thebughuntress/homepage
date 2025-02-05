import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import Home from "./pages/Home/Home";
import darkTheme from "./theme/darkTheme";
import lightTheme from "./theme/lightTheme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    const savedPreference = localStorage.getItem("theme");
    setIsDarkMode(savedPreference === "dark");
  }, []);

  useEffect(() => {}, []);

  // Function to handle the switch toggle
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeProvider theme={theme}>
        {isDarkMode !== undefined && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              minHeight: "100vh",
              width: "100vw",
              maxWidth: "100vw",
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Navigation
              isDarkMode={isDarkMode}
              onThemeToggle={handleThemeToggle}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<Blog />} />
              <Route path="/classes/:postId" element={<BlogPost />} />
            </Routes>
            <Footer />
          </Box>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
