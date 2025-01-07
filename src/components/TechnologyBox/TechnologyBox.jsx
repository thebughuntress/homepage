import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const TechnologyBox = ({ label, img }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#FFF",
        p: 1,
        width: { xs: "34vw", md: "12vw" },
        height: { xs: "45px", md: "50px" },
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
