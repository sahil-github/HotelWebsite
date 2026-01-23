import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
// import AboutBg from "../../public/Saved Pictures/About.JPG"; 

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "87.5vh",
        // backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack spacing={3} maxWidth="700px">
          <Typography
            variant="h3"
            fontWeight={700}
            color="white"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            About Gulmohar Grand
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255,255,255,0.9)"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            Gulmohar Grand is a perfect blend of luxury, comfort, and
            hospitality. Designed to offer an elegant stay experience, we
            provide premium rooms, fine dining, and exceptional service that
            makes every guest feel special.
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255,255,255,0.9)"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
            }}
          >
            Whether you are traveling for business or leisure, Gulmohar Grand
            ensures a memorable and relaxing experience with modern amenities
            and warm hospitality.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
