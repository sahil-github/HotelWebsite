import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";

const amenities = [
  {
    icon: <EventOutlinedIcon />,
    title: "Unforgettable Events",
    desc: "Perfect space for small celebrations & gatherings.",
  },
  {
    icon: <PoolOutlinedIcon />,
    title: "Swimming Pool",
    desc: "Refresh yourself in our clean & calm pool area.",
  },
  {
    icon: <AirportShuttleOutlinedIcon />,
    title: "Airport Shuttle",
    desc: "Comfortable pickup & drop service available.",
  },
  {
    icon: <TvOutlinedIcon />,
    title: "Multimedia",
    desc: "Flat-screen TV with entertainment options.",
  },
  {
    icon: <FitnessCenterOutlinedIcon />,
    title: "Fitness Center",
    desc: "Stay active with basic fitness facilities.",
  },
  {
    icon: <AcUnitOutlinedIcon />,
    title: "Air Conditioning",
    desc: "Well-maintained air-conditioned rooms.",
  },
  {
    icon: <LocalLaundryServiceOutlinedIcon />,
    title: "Laundry Service",
    desc: "Quick and reliable laundry assistance.",
  },
  {
    icon: <BathtubOutlinedIcon />,
    title: "Private Bathrooms",
    desc: "Clean bathrooms with modern fittings.",
  },
  {
    icon: <LuggageOutlinedIcon />,
    title: "Luggage Storage",
    desc: "Safe storage for your belongings.",
  },
  {
    icon: <RoomServiceOutlinedIcon />,
    title: "Room Service",
    desc: "Food & assistance delivered to your room.",
  },
  {
    icon: <BedOutlinedIcon />,
    title: "Comfort Beds",
    desc: "Relax with premium bedding for a perfect night’s sleep.",
  },
  {
    icon: <RestaurantOutlinedIcon />,
    title: "Exquisite Dining",
    desc: "Enjoy delicious meals prepared by expert chefs.",
  },
];

const Amenities = () => {
  return (
    <Box
      sx={{
        py: 8,

        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={1} align="center">
        AMENITIES
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={6}>
        {amenities.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: "center", px: 2 }}>
              <Box
                sx={{
                  fontSize: 50,
                  color: "#444",
                  mb: 1,
                }}
              >
                {item.icon}
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#777", fontSize: "0.85rem" }}
              >
                {/* {item.desc} */}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
