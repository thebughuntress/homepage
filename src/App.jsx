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
  // Default to the system preference if not found in localStorage
  const savedPreference = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(savedPreference === "dark");

  // Save the user's preference to localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Function to handle the switch toggle
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

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
      </ThemeProvider>
    </Router>
  );
}

export default App;
