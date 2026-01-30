import React from "react";
import AmenityCard from "./AmenityCard";

// MUI Icons
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";

const amenities = [
  {
    icon: <BedOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Comfortable Beds",
    desc: "Premium bedding for a restful night’s sleep.",
  },
  {
    icon: <RestaurantOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "In-House Restaurant",
    desc: "Delicious meals by expert chefs.",
  },
  {
    icon: <EventOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Event Space",
    desc: "Perfect venue for gatherings.",
  },
  {
    icon: <PoolOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Swimming Pool",
    desc: "Clean & relaxing pool.",
  },
  {
    icon: <AirportShuttleOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Airport Shuttle",
    desc: "Pickup & drop service.",
  },
  {
    icon: <TvOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Flat-Screen TV",
    desc: "Entertainment channels.",
  },
  {
    icon: <FitnessCenterOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Fitness Center",
    desc: "Basic gym facilities.",
  },
  {
    icon: <AcUnitOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Air Conditioning",
    desc: "Fully AC rooms.",
  },
  {
    icon: <WifiOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Free Wi-Fi",
    desc: "High speed internet.",
  },
  {
    icon: <LocalParkingOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Free Parking",
    desc: "Secure parking area.",
  },
  {
    icon: <SecurityOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "24/7 Security",
    desc: "CCTV & staff support.",
  },
  {
    icon: <RoomServiceOutlinedIcon style={{ fontSize: "42px" }} />,
    title: "Room Service",
    desc: "Food & assistance anytime.",
  },
];

const Amenities = () => {
  return (
    <section
      style={{
        padding: "60px 80px",
        textAlign: "center",
        background: "#fff",
        color: "#111",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "700",
            marginBottom: "35px",
          }}
        >
          Amenities
        </h2>

        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {amenities.map((item, index) => (
            <AmenityCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
