import React from "react";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <Container>
        {/* Heading (same vibe as Contact) */}
        <Typography
          variant="h4"
          fontWeight={700}
          mb={1}
        >
          ABOUT GULMOHAR GRAND
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Content */}
        <Stack spacing={3} maxWidth="800px">
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
      </Container>
    </Box>
  );
};

export default About;
