import React, { useRef, useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const emailjsConfig = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        form.current,
        emailjsConfig.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent!");
          form.current.reset();
          setTimeout(() => setIsSending(false), 700);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email.");
          setIsSending(false);
        }
      );
  };

  const textFieldSlotProps = {
    input: {
      sx: {
        fontSize: "1rem",
        color: "#FFF",
      },
    },
    inputLabel: {
      sx: {
        fontSize: "1rem",
        color: "#FFF",
      },
    },
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root.Mui-focused": {
      borderColor: "inherit",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "inherit",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#FFF",
    },
    "& .MuiInputBase-input": {
      color: "#FFF",
    },
    "& .MuiOutlinedInput-root": {
      borderColor: "#FFF",
      "&.Mui-focused": {
        borderColor: "#FFF",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#FFF",
      },
    },
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 1 }}>
        Send a message
      </Typography>
      <form ref={form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="from_name"
          fullWidth
          required
          margin="normal"
          slotProps={textFieldSlotProps}
          sx={textFieldSx}
        />
        <TextField
          label="Email"
          name="from_email"
          type="email"
          fullWidth
          required
          margin="normal"
          slotProps={textFieldSlotProps}
          sx={textFieldSx}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          slotProps={textFieldSlotProps}
          sx={textFieldSx}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            boxShadow: "none",
            backgroundColor: "primary.main",
            color: "#FFF",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "#FFF",
              borderColor: "white",
              boxShadow: "none",
            },
          }}
          disabled={isSending}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
