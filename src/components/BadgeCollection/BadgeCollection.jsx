import React, { useEffect } from "react";
import { Box } from "@mui/material";

const BadgeCollection = () => {
  useEffect(() => {
    // Dynamically load the Credly script for embedding badges
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        //backgroundColor: "#e6e3d3",
        height: "fit-content",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center", 
        alignItems: "center", 
        padding: "5rem 2rem 1.5rem 2rem",
        gap: 5
      }}
    >
      {/* Badge 1 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 0, md: 0 },
        }}
      >
        <div
          data-iframe-width="230"
          data-iframe-height="300"
          data-share-badge-id="7b5d324e-72a9-49da-943d-0e7fcbf835c4"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </Box>

      {/* Badge 2 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 0, md: 0 },
        }}
      >
        <div
          data-iframe-width="230"
          data-iframe-height="300"
          data-share-badge-id="efb5b4b1-47f8-4cd3-b497-6ab45b427232"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </Box>

      {/* Badge 3 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 0, md: 0 },
        }}
      >
        <div
          data-iframe-width="230"
          data-iframe-height="300"
          data-share-badge-id="d7c6436d-91aa-4124-a530-67f185f6f372"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </Box>

      {/* Badge 4 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 0, md: 0 },
        }}
      >
        <div
          data-iframe-width="230"
          data-iframe-height="300"
          data-share-badge-id="4c6cef95-abb8-4a7f-acd9-467d0b6831f1"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </Box>
    </Box>
  );
};

export default BadgeCollection;
