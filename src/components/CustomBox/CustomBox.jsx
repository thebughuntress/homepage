import * as React from "react";
import { Box } from "@mui/material";

const CustomBox = ({ children, sx }) => {
  return (
    <Box
      sx={{
        border: "none",
        margin: "0 0 24px",
        padding: "32px",
        width: "100%", // Ensure it takes up full width within its container
        backgroundColor: "#e5eeed", // Background color
        display: "flex",
        flexDirection: "column", // Stack children vertically
        gap: "16px", // Space between each row of content
        borderRadius: "16px",
        ...sx, // Allow for external styling to override width (like in ClassCards)
      }}
    >
      {/* Render any content passed as children */}
      {children}
    </Box>
  );
};

export default CustomBox;
