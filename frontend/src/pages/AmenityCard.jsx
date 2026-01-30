import React from "react";

const AmenityCard = ({ icon, title, desc }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "28px 22px",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        width: "100%",
        minHeight: "200px",
        border: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
      }}
    >
      <div
        style={{
          fontSize: "42px",
          color: "#d4af37",
          marginBottom: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#111",
          margin: "0",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#666",
          margin: "12px 0 18px",
          fontSize: "15px",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default AmenityCard;
