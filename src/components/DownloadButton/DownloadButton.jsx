import React from "react";
import { Button, styled } from "@mui/material";

// Styled Button Component using button-18 styles with updated background color
const StyledButton = styled(Button)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "#2f1f70", // Updated background color
  border: "0",
  borderRadius: "100px",
  boxSizing: "border-box",
  color: "#ffffff",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily:
    '-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
  fontSize: "16px",
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "20px",
  maxWidth: "480px",
  minHeight: "40px",
  minWidth: "0px",
  overflow: "hidden",
  padding: "0px 20px",
  textAlign: "center",
  touchAction: "manipulation",
  transition:
    "background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1), color 0.167s cubic-bezier(0.4, 0, 0.2, 1)",
  userSelect: "none",
  verticalAlign: "middle",

  "&:hover, &:focus": {
    backgroundColor: "#1e154a", // Darker shade for hover/focus
    color: "#ffffff",
  },

  "&:active": {
    backgroundColor: "#150e3a", // Even darker shade for active
    color: "rgba(255, 255, 255, 0.7)",
  },

  "&:disabled": {
    cursor: "not-allowed",
    backgroundColor: "rgba(47, 31, 112, 0.5)", // Semi-transparent for disabled
    color: "rgba(255, 255, 255, 0.3)",
  },
}));

const DownloadButton = ({ label, pathToFile, downloadFileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pathToFile;
    link.download = downloadFileName;
    link.click();
  };

  return <StyledButton onClick={handleDownload}>{label}</StyledButton>;
};

export default DownloadButton;
