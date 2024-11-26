import React from "react";
import { Button, styled } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// DownloadButton component that accepts color as a prop
const DownloadButton = ({
  label,
  pathToFile,
  downloadFileName,
  color = "primary.main",
}) => {
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
        display: { xs: "none", md: "flex" },
        color: color,
        border: `2px solid`,
        borderColor: `${color}`,
        borderRadius: 100,
        cursor: "pointer",
        fontWeight: 600,
        justifyContent: "center",
        width: "fit-content",
        "&:hover": {
          color: "white",
          backgroundColor: `${color}`,
        },
      }}
      onClick={handleDownload}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
