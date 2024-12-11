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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem("theme");
    const isBrowserInDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(
      !(savedPreference === "light") &&
        (savedPreference === "dark" || isBrowserInDarkMode)
    );
  }, []);

  useEffect(() => {}, []);

  // Function to handle the switch toggle
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box>
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
