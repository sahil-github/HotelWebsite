import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  InputBase,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LOGO from "../assets/GULMOHARLOGO.png";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Search = styled("div")({
  display: "flex",
  alignItems: "center",
  width: 380,
  height: 38,
  borderRadius: 30,
  background: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.4)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255,255,255,0.25)",
  },
  "&:focus-within": {
    boxShadow: "0 0 14px rgba(212,175,55,0.6)",
  },
});

const StyledInputBase = styled(InputBase)({
  color: "#fff",
  flex: 1,
  "& input": {
    textAlign: "center",
    padding: "8px",
    fontSize: "0.95rem",
  },
});

const SearchIconWrapper = styled("div")({
  padding: "0 14px",
  color: "#fff",
  cursor: "pointer",
});

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        backgroundColor: "#0F0F0F",
        height: "100%",
        color: "#fff",
      }}
    >
      <Divider sx={{ borderColor: "#333" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [filters, setFilters] = useState({});

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000", 
          // backgroundColor: "transparent",
          backdropFilter: "blur(12px)",
          boxShadow: "#000",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Box component={Link} to="/" sx={{ display: "flex" }}>
              <Box
                component="img"
                src={LOGO}
                alt="Gulmohar Grand"
                sx={{
                  height: { xs: 50, sm: 65 },
                  borderRadius: 2,
                  p: 0.5,
                  cursor: "pointer",
                  filter: "drop-shadow(0 4px 10px rgba(240, 189, 22, 0.35))",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            <Search>
              <StyledInputBase
                placeholder="Search rooms, services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log("Search:", search);
                  }
                }}
              />

             

              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#f4c50b",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <AccountCircleSharpIcon style={{ fontSize: 40, color: "#555" }} />
          </Box>
        </Toolbar>
      </AppBar>

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
            backgroundColor: "#0F0F0F",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
