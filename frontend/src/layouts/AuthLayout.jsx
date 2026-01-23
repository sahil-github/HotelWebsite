import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import InputBG from "../assets/login.png";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: ` url(${InputBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
          px: 2,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default AuthLayout;
