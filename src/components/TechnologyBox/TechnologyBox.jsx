import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const TechnologyBox = ({ label, img }) => {
  return (
    <Card
      sx={{
        m: 1,
        p: 1,
        width: { xs: "40vw", md: "12vw" },
        height: { xs: "50px", md: "50px" },
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        gap: 1,
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={label}
        sx={{
          objectFit: "contain",
          backgroundColor: "transparent",
          width: "55px",
          paddingX: "2px",
          maxHeight: { xs: "50px", md: "50px" },
        }}
      />

      <Typography variant="body1" sx={{ fontSize: "15px" }}>
        {label}
      </Typography>
    </Card>
  );
};

export default TechnologyBox;
