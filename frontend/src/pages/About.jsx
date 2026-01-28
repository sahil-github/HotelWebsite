import React from "react";
import { Box, Typography, Stack, Divider, Grid } from "@mui/material";
import abt from "../assets/ab.JPG";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
      }}
    >
      {/* Heading */}
      <Typography variant="h4" fontWeight={700} ml={2} mt={2} align="center">
        ABOUT US
      </Typography>

      <Divider sx={{ mb: 6 }} />

      {/* Content */}
      <Grid container spacing={4} alignItems="center">
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} maxWidth={800}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#222",
              }}
            >
              Gulmohar Grand is a perfect blend of luxury, comfort, and warm
              hospitality. Designed to offer an elegant stay experience, we
              provide premium rooms, fine dining, and exceptional service that
              makes every guest feel truly special.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#222",
              }}
            >
              Whether you are traveling for business or leisure, Gulmohar Grand
              ensures a memorable and relaxing experience with modern amenities,
              personalized care, and a welcoming atmosphere.
            </Typography>
          </Stack>
        </Grid>

        {/* RIGHT IMAGE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={abt}
            alt="Gulmohar Grand"
           sx={{
            width: "100%",
            height: { xs: 500, md: 500 },
            objectFit: "cover",
            borderRadius: 2,
          }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
