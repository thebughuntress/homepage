import React, { useRef, useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../emailConfig.js";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    console.log(TEMPLATE_ID);
  }, [TEMPLATE_ID]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
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
        fontSize: "1.2rem",
      },
    },
    inputLabel: {
      sx: {
        fontSize: "1.2rem",
      },
    },
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: 2,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 2 }}>
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
        />
        <TextField
          label="Email"
          name="from_email"
          type="email"
          fullWidth
          required
          margin="normal"
          slotProps={textFieldSlotProps}
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
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            boxShadow: "none",
            backgroundColor: "primary.dark",
            color: "#FFF",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "primary.main",
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
