import React from "react";
import { Box,  Typography, Stack, Divider } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
         minHeight: "100vh",
        py:1,
        backgroundColor: "#fff",
         px: { xs: 2, md: 12  }
      }}
    >
  
        <Typography
          variant="h4"
          fontWeight={700}
          ml={2} mt={2}
          align="center"
        >
          ABOUT US
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Content */}
        <Stack spacing={3} maxWidth="800px" >
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
    </Box>
  );
};

export default About;
