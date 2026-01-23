import { Box, Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          height: 24,
          px: { xs: 2, md: 4 },

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          backgroundColor: "#222",
          color: "#fff", //
          backdropFilter: "blur(12px)",

          fontSize: 14,
        }}
      >
        {/* <Typography variant="body2" sx={{ color: "#fff", opacity: 0.85 }}>
          © 2025 SBL. All Rights Reserved
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {["Privacy", "Terms", "Sitemap", "Company"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{
                color: "#fff",
                opacity: 0.85,
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>

        <Typography variant="body2" sx={{ color: "#fff", opacity: 0.85 }}>
          English (IN) · ₹ INR
        </Typography> */}
      </Box>
    </>
  );
};

export default Footer;
