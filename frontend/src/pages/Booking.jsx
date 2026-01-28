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
  Container,
  Divider,
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
      capacity: "2 Adults",
      price: "₹3,500",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      amenities: [
        "King / Twin Bed",
        "City View",
        "Free Wi-Fi",
        "Minibar",
        "Tea / Coffee",
      ],
    },
    {
      name: "Executive Room",
      size: "42 sqm",
      capacity: "3 Adults",
      price: "₹4,800",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      amenities: [
        "King Bed",
        "Balcony",
        "Free Wi-Fi",
        "Breakfast Included",
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
         minHeight: "100vh",
         px: { xs: 2, md: 12  }
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700} ml={2} mt={2} align="center">
          Book Your Stay
        </Typography>
          <Divider sx={{ mb: 4 }} />
        <Typography variant="body1" mb={4} color="text.secondary">
          Select your dates and choose the perfect room
        </Typography>

        {/* BOOKING FORM */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 6,
            p: 3,
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
            sx={{ flex: 1, minWidth: 200 }}
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
            sx={{ flex: 1, minWidth: 200 }}
          />

          <TextField
            select
            label="Adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            InputProps={{
              startAdornment: <PeopleIcon sx={{ mr: 1 }} />,
            }}
            sx={{ width: 140 }}
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
            InputProps={{
              startAdornment: <PeopleIcon sx={{ mr: 1 }} />,
            }}
            sx={{ width: 140 }}
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* ROOMS */}
        <Typography variant="h5" fontWeight={700} mb={3}>
          Select Your Room
        </Typography>

        <Grid container spacing={4}>
          {rooms.map((room, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  image={room.image}
                  alt={room.name}
                  sx={{ width: 220 }}
                />

                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={700}>
                    {room.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {room.size} • {room.capacity}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    {room.amenities.map((amenity, idx) => (
                      <Chip key={idx} label={amenity} size="small" />
                    ))}
                  </Box>

                  <Typography variant="h6" mb={2}>
                    From {room.price} / night
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#f4c50b",
                      color: "#000",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#e0b400",
                      },
                    }}
                  >
                    Select Room
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Booking;
