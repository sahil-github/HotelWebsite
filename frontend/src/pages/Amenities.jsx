import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

// Icons
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
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import SmokeFreeOutlinedIcon from "@mui/icons-material/SmokeFreeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const amenities = [
  {
    icon: <BedOutlinedIcon />,
    title: "Comfortable Beds",
    desc: "Premium bedding for a restful night’s sleep.",
  },
  {
    icon: <RestaurantOutlinedIcon />,
    title: "In-House Restaurant",
    desc: "Delicious meals prepared by expert chefs.",
  },
  {
    icon: <EventOutlinedIcon />,
    title: "Event Space",
    desc: "Perfect venue for small celebrations & gatherings.",
  },
  {
    icon: <PoolOutlinedIcon />,
    title: "Swimming Pool",
    desc: "Clean and relaxing pool for guests.",
  },
  {
    icon: <AirportShuttleOutlinedIcon />,
    title: "Airport Shuttle",
    desc: "Comfortable pickup and drop service available.",
  },
  {
    icon: <TvOutlinedIcon />,
    title: "Flat-Screen TV",
    desc: "Entertainment with multiple channels.",
  },
  {
    icon: <FitnessCenterOutlinedIcon />,
    title: "Fitness Center",
    desc: "Basic gym facilities to stay active.",
  },
  {
    icon: <AcUnitOutlinedIcon />,
    title: "Air Conditioning",
    desc: "Fully air-conditioned rooms for comfort.",
  },
  {
    icon: <LocalLaundryServiceOutlinedIcon />,
    title: "Laundry Service",
    desc: "Quick and reliable laundry support.",
  },
  {
    icon: <BathtubOutlinedIcon />,
    title: "Private Bathroom",
    desc: "Modern fittings with 24/7 hot water.",
  },
  {
    icon: <LuggageOutlinedIcon />,
    title: "Luggage Storage",
    desc: "Safe storage for your belongings.",
  },
  {
    icon: <RoomServiceOutlinedIcon />,
    title: "Room Service",
    desc: "Food and assistance delivered to your room.",
  },
  {
    icon: <WifiOutlinedIcon />,
    title: "Free Wi-Fi",
    desc: "High-speed internet throughout the hotel.",
  },
  {
    icon: <LocalParkingOutlinedIcon />,
    title: "Free Parking",
    desc: "Secure on-site parking for guests.",
  },
  {
    icon: <SecurityOutlinedIcon />,
    title: "24/7 Security",
    desc: "CCTV surveillance and trained staff.",
  },
  {
    icon: <SpaOutlinedIcon />,
    title: "Spa & Wellness",
    desc: "Relax with soothing spa treatments.",
  },
  {
    icon: <CoffeeOutlinedIcon />,
    title: "Tea & Coffee",
    desc: "Complimentary tea and coffee service.",
  },
  {
    icon: <MeetingRoomOutlinedIcon />,
    title: "Conference Room",
    desc: "Ideal for meetings and business events.",
  },
  {
    icon: <SmokeFreeOutlinedIcon />,
    title: "Non-Smoking Rooms",
    desc: "Clean and smoke-free environment.",
  },
  {
    icon: <SupportAgentOutlinedIcon />,
    title: "24/7 Front Desk",
    desc: "Assistance available anytime.",
  },
];

const Amenities = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={1}
      >
        AMENITIES
      </Typography>

      <Divider sx={{ mb: 5 }} />

      <Grid container spacing={5} sx={{ px: { xs: 2, md: 12 } }}>
        {amenities.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                px: 3,
                py: 4,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  transform: "translateY(-5px)",
                  loading: "lazy"
                },
              }}
            >
              <Box
                sx={{
                  fontSize: 50,
                  color: "#1976d2",
                  mb: 1,
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant="subtitle1"
                fontWeight={600}
                mb={0.5}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#666", fontSize: "0.85rem" }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
