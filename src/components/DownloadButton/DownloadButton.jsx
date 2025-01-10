import React from "react";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DownloadButton = ({ label, downloadFileName, url, fallbackFile }) => {
  const handleDownload = async () => {
    try {
      // Fetch the file from the specified URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Download from ${fileUrl} failed...`);
      }

      // Create a blob from the response and trigger the download
      const blob = await response.blob();
      const link = document.createElement("a");
      link.download = downloadFileName;
      const objectUrl = URL.createObjectURL(blob);
      link.href = objectUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.info("Downloading fallback file");

      try {
        // Attempt fallback file download
        const link = document.createElement("a");
        link.download = downloadFileName;
        link.href = fallbackFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
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
