import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LOGO from "../assets/GULMOHARLOGO.png";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Amenities", path: "/amenities" },
  { label: "Rooms", path: "/rooms" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ height: "100%", backgroundColor: "#fff" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                "&.active": {
                  backgroundColor: "#f4c50b",
                  color: "#000",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
           px: { xs: 2, md: 12  }, py: 1 ,
        }}
      >
        <Toolbar>
          {/* MOBILE MENU */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Box sx={{ flexGrow: 1 }}>
            <Box component={NavLink} to="/" sx={{ display: "inline-flex" }}>
              <Box
                component="img"
                src={LOGO}
                alt="Gulmohar Grand"
                sx={{
                  height: { xs: 40, sm: 70 },
                  cursor: "pointer",
                  // transition: "transform 0.3s",
                  // "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          </Box>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "#1E1E1E",
                  fontWeight: 500,
                  "&.active": { color: "#f4c50b" },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#f4c50b",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* OFFSET FOR FIXED NAVBAR */}
      <Toolbar />

      {/* MOBILE DRAWER */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
