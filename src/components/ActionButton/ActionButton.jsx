import * as React from "react";
import { Button } from "@mui/material";

const ActionButton = ({ label, onClick, disabled, ...props }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{
        // Custom styles applied to the MUI Button component
        appearance: "none",
        backgroundColor: "#FAFBFC",
        border: "1px solid rgba(27, 31, 35, 0.15)",
        borderRadius: "6px",
        boxShadow: "rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset",
        boxSizing: "border-box",
        color: "#24292E",
        cursor: "pointer",
        display: "inline-block",
        fontFamily:
          "-apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        listStyle: "none",
        padding: "6px 16px",
        position: "relative",
        transition: "background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "manipulation",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        wordWrap: "break-word",

        // Hover effect
        "&:hover": {
          backgroundColor: "#F3F4F6",
          textDecoration: "none",
          transitionDuration: "0.1s",
        },

        // Active effect
        "&:active": {
          backgroundColor: "#EDEFF2",
          boxShadow: "rgba(225, 228, 232, 0.2) 0 1px 0 inset",
          transition: "none 0s",
        },

        // Focus effect
        "&:focus": {
          outline: "1px transparent",
        },

        // Disabled styles
        ...(disabled && {
          backgroundColor: "#FAFBFC",
          borderColor: "rgba(27, 31, 35, 0.15)",
          color: "#959DA5",
          cursor: "default",
        }),
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
