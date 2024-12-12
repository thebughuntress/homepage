import React from "react";
import { Box, Button } from "@mui/material";
import santaClausHatImg from "../../assets/santa-claus-hat.png";
import santaClausHatSvg from "../../assets/santa-claus-hat.svg";
import gluehweinImg from "../../assets/gluehwein.png";

const BuyMeACoffee = ({ withDeco = false }) => {
  const currentDate = new Date();
  const isGluhweinSeason =
    currentDate.getMonth() === 11 &&
    currentDate.getDate() >= 1 &&
    currentDate.getDate() <= 25;

  const sxBMACButton = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 16px",
    fontSize: "27px",
    textTransform: "none",
    fontFamily: "Cookie",
    borderRadius: 2,
    minWidth: "220px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginY: 3,
        marginLeft: 2,
      }}
    >
      {isGluhweinSeason ? (
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
          }}
        >
          {withDeco && (
            <Box
              component="img"
              src={santaClausHatSvg}
              alt="Santa Claus Hat"
              sx={{
                position: "absolute",
                top: -26,//-29,
                right: -35, //-25,
                width: 70,
                height: 72,
                transform: "rotate(40deg)", //"rotate(-5deg) scaleX(-1)",
                zIndex: 11,
              }}
            />
          )}

          <Button
            onClick={() =>
              window.open("https://www.buymeacoffee.com/antoniafrey", "_blank")
            }
            startIcon={
              <img
                src={gluehweinImg}
                alt="Gluehwein"
                style={{ width: "35px", height: "35px", marginRight: "3px" }}
              />
            }
            variant="contained"
            sx={{
              backgroundColor: "#0f4524",
              ...sxBMACButton,
            }}
          >
            Buy me a Glühwein
          </Button>
        </Box>
      ) : (
        <a
          href="https://www.buymeacoffee.com/antoniafrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ maxHeight: "40px", width: "217px !important" }}
          />
        </a>
      )}
    </Box>
  );
};

export default BuyMeACoffee;
