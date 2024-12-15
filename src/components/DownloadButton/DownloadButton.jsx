import React from "react";
import { Button, styled } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadButton = ({
  label,
  pathToFile,
  downloadFileName,
  color,
  url,
}) => {
  const handleDownload = async () => {
    const fileUrl = url || pathToFile;

    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch the file.");
      }
      const blob = await response.blob();
      const link = document.createElement("a");

      // Create an object URL for the blob
      const objectUrl = URL.createObjectURL(blob);
      link.href = objectUrl;
      link.download = downloadFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Error downloading or saving the file:", error);
    }

    // Open the file in a new tab instead of downloading
    //window.open(fileUrl, "_blank");
  };

  return (
    <Button
      variant="outlined"
      startIcon={<FileDownloadIcon />}
      sx={{
        fontSize: "13px",
        height: "37px",
        borderRadius: 100,
        cursor: "pointer",
        fontWeight: 600,
        justifyContent: "center",
        width: "fit-content",
        color: `${color}`,
        border: `2px solid`,
        borderColor: `${color}`,
        "&:hover": {
          color: "#FFF",
          backgroundColor: "primary.main",
        },
      }}
      onClick={handleDownload}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
