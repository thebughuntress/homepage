import React from "react";
import { Box, Button } from "@mui/material";
import santaClausHatSvg from "../../assets/santa-claus-hat.svg";
import gluehweinImg from "../../assets/gluehwein.png";
import coffeeSvg from "../../assets/bmc-full-logo.svg";

const BuyMeACoffee = ({ coffeeVersion = false, withDeco = false }) => {
  const currentDate = new Date();
  const isGluhweinSeason =
    currentDate.getMonth() === 11 &&
    currentDate.getDate() >= 1 &&
    currentDate.getDate() <= 25;

  const sxBMACButton = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px",
    fontSize: "20px",
    fontWeight: "400",
    textTransform: "none",
    fontFamily: "Leckerli One, cursive",
    height: "45px",
    borderRadius: 100,
    cursor: "pointer",
    width: "fit-content",
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
      {isGluhweinSeason && !coffeeVersion ? (
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
                top: -26, //-29,
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
        <Box
          component="a"
          href="https://www.buymeacoffee.com/antoniafrey"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            padding: "20px",
          }}
        >
          <Box
            component="img"
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=antoniafrey&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
            alt="Buy me a coffee"
            sx={{
              height: "50px", // Adjust height if needed
              width: "auto",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default BuyMeACoffee;
