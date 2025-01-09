import React from "react";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadButton = ({ label, downloadFileName, url, file }) => {
  const handleDownload = async () => {
    const fileUrl = url;

    if (file) {
      const link = document.createElement("a");
      link.href = file;
      link.download = downloadFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    if (!file && fileUrl && fileUrl.startsWith("https://")) {
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
    }
  };

  return (
    <Button
      variant="contained"
      startIcon={<FileDownloadIcon />}
      onClick={handleDownload}
    >
      {label}
    </Button>
  );
};

export default DownloadButton;
