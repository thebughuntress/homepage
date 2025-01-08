import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const TechnologyBox = ({ label, img }) => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "#FFF",
        p: 1,
        width: { xs: "34vw", md: "25%", lg: "28%" },
        height: { xs: "45px", md: "50px" },
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        gap: 1,
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={label}
        sx={{
          objectFit: "contain",
          backgroundColor: "transparent",
          width: { xs: "50px", md: "55px" },
          paddingX: { xs: "1px", md: "2px" },
          maxHeight: { xs: "45px", md: "50px" },
        }}
      />

      <Typography
        variant="body1"
        color="black"
        sx={{ fontSize: { xs: "12px", md: "15px" } }}
      >
        {label}
      </Typography>
    </Card>
  );
};

export default TechnologyBox;
