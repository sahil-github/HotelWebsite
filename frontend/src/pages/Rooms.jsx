import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider
} from "@mui/material";
import Room from "../assets/about.png";

const Rooms = () => {
  return (
    <Box   sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        px: { xs: 2, md: 12 },
        py: 4,
      }}>
          <Typography variant="h4" fontWeight={700} ml={2} mt={2} align="center">
        ROOMS & RATES
          </Typography>
    
         
               <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4} sx={{ px: { xs: 2, md: 12 } }}>
      {/* LEFT SIDE - IMAGE */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          component="img"
          src={Room}
           loading="lazy"
          alt="Room"
          sx={{
            width: "100%",
            height: { xs: 500, md: 500 },
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Grid>

      {/* RIGHT SIDE - DETAILS */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h4"  gutterBottom>
          Single Room
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          ⭕ Open for reservation until September 30, 202
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          ⚠️ Attention: The credit card service has been opened on February 1,
          2024. If you need to pay the deposit by remittance (transfer), please
          inform us proactively. We apologize for the inconvenience.
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="76 m²" />
          </ListItem>
          <ListItem>
            <ListItemText primary="One King Size Bed / One Patio / One Bathroom" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Extra Bed Allowed: NTD $4,550 / person" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Child (0–4 years): No extra charge" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Child (5–11 years): NT$ 2,000 (Breakfast Only)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Only 1 Adult + 1 Child under 4 years allowed" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Guests over 12 years are counted as adults" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Free Wi-Fi / Free Parking / Free Facilities" />
          </ListItem>
        </List>

      </Grid>
    </Grid>
    </Box>
  
  );
};

export default Rooms;
