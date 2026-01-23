import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import HotelBG from "../assets/hotel-bg.JPG";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        overflow: "hidden",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ), url(${HotelBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box maxWidth="800px">
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 1.5,
            mb: 2,
            fontSize: {
              xs: "2.2rem",
              sm: "3rem",
              md: "3.5rem",
            },
          }}
        >
          Hotel  Gulmohar Grand hotel
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#f4c50bff",
            fontWeight: 400,
            letterSpacing: 1,
            mb: 4,
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
            },
          }}
        >
          Crafted for Comfort, Designed for You
        </Typography>

        <Button
          component={RouterLink}
          to="/booking"
          variant="contained"
          sx={{
            backgroundColor: "#f4c50bff",
            color: "#000",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#e0b400",
            },
          }}
        >
          Book Your Stay
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
