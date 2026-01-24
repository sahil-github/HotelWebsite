import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";

const Booking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const rooms = [
    {
      name: "Deluxe Room",
      size: "35 sqm",
      capacity: "2 adults",
      price: "IDR 1,200,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTkzNDR8MHwxfGFsbHwxfHxob3RlbCUyMHJvb218ZW58MHx8fHwxNjg5MTY0MTkz&ixlib=rb-4.0.3&q=80&w=400",
      amenities: ["King or Twin Beds", "City View", "Free Wi-Fi", "Minibar", "Coffee/Tea Maker"],
    },
    // Add more rooms here if needed
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" fontWeight={600} mb={2}>
        Book Your Stay
      </Typography>
      <Typography variant="body1" mb={4}>
        Select your preferred dates and room type to begin your booking
      </Typography>

      {/* Booking Form */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 6,
          p: 2,
          backgroundColor: "#fff",
          borderRadius: 2,
        }}
      >
        <TextField
          label="Check-in"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <CalendarTodayIcon sx={{ mr: 1 }} />,
          }}
          sx={{ flex: 1, minWidth: 150 }}
        />
        <TextField
          label="Check-out"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <CalendarTodayIcon sx={{ mr: 1 }} />,
          }}
          sx={{ flex: 1, minWidth: 150 }}
        />
        <TextField
          select
          label="Adults"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          InputProps={{ startAdornment: <PeopleIcon sx={{ mr: 1 }} /> }}
          sx={{ width: 120 }}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          InputProps={{ startAdornment: <PeopleIcon sx={{ mr: 1 }} /> }}
          sx={{ width: 120 }}
        >
          {[0, 1, 2, 3, 4].map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Room Cards */}
      <Typography variant="h5" fontWeight={600} mb={3}>
        Select Your Room
      </Typography>

      <Grid container spacing={4}>
        {rooms.map((room, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ display: "flex", borderRadius: 3 }}>
              <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={room.image}
                alt={room.name}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  {room.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={1}>
                  {room.size} • {room.capacity}
                </Typography>

                {/* Amenities */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {room.amenities.map((amenity, idx) => (
                    <Chip key={idx} label={amenity} size="small" />
                  ))}
                </Box>

                <Typography variant="h6" color="text.primary" mb={2}>
                  From {room.price} per night
                </Typography>

                <Button variant="contained">Select Room</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Booking;
