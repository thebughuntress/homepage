import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";

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
            backgroundColor: theme.palette.bgColor.main,
          }}
        >
          <Navigation />
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
