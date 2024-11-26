import React from "react";
import { Button, styled } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// DownloadButton component that accepts color as a prop
const DownloadButton = ({ label, pathToFile, downloadFileName, color }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pathToFile;
    link.download = downloadFileName;
    link.click();
  };

  return (
    <Button
      variant="outlined"
      startIcon={<FileDownloadIcon />}
      sx={{
        color: `${color}`,
        border: `2px solid`,
        borderColor: `${color}`,
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
