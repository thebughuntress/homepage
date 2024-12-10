import React from "react"; 
import { Button, styled } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// DownloadButton component that accepts color, label, pathToFile, downloadFileName, and url as props
const DownloadButton = ({ label, pathToFile, downloadFileName, color, url }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    // Use the provided URL if it exists, otherwise fall back to pathToFile
    const fileUrl = url || pathToFile;
    link.href = fileUrl;
    link.download = downloadFileName;
    //link.click();

    // Open the file in a new tab instead of downloading
    window.open(fileUrl, "_blank");
  };

  return (
    <Button
      variant="outlined"
      startIcon={<FileDownloadIcon />}
      sx={{
        fontSize: "14px",
        color: `${color}`,
        border: `2px solid`,
        borderColor: `${color}`,
        height:  "40px",
        borderRadius: 100,
        cursor: "pointer",
        fontWeight: 600,
        justifyContent: "center",
        width: "fit-content",
        "&:hover": {
          color: color === "#FFF" ? "primary.main" : "#FFF",
          backgroundColor: color === "#FFF" ? "#FFF" : `${color}`,
        },
        zIndex: 3,
      }}
      onClick={handleDownload}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
