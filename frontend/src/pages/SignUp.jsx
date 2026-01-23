import * as React from "react";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  Card as MuiCard,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const Card = styled(MuiCard)({
  width: "100%",
  maxWidth: 420,
  padding: "32px 28px",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  gap: 14,

  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",

  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  border: "1px solid rgba(0,0,0,0.25)",
});

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    backgroundColor: "transparent",

    "& fieldset": { borderColor: "#000" },
    "&:hover fieldset": { borderColor: "#000" },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
      borderWidth: 2,
    },
  },
  "& input": {
    padding: "14px",
    fontSize: 15,
  },
  "& .MuiFormHelperText-root": {
    color: "#d32f2f",
  },
};

export default function SignUp() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    updates: false,
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Signup Data:", form);
  };

  return (
    <>
      <CssBaseline />

      <Card>
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Sign Up
        </Typography>

        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.85 }}>
          Join <strong>Gulmohar Grand</strong> and start your journey
        </Typography>

        <Box component="form" onSubmit={handleSubmit} mt={1}>
          <FormControl fullWidth margin="normal">
            <TextField
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              error={!!errors.name}
              helperText={errors.name}
              sx={textFieldStyles}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              error={!!errors.email}
              helperText={errors.email}
              sx={textFieldStyles}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password}
              sx={textFieldStyles}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                name="updates"
                checked={form.updates}
                onChange={handleChange}
              />
            }
            label="I want to receive updates via email"
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 2.5,
              py: 1.4,
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 16,
              textTransform: "none",
              background: "linear-gradient(135deg, #7fffd4, #d5d95a)",
              color: "#000",
              "&:hover": {
                background: "linear-gradient(135deg, #66e0c2, #4ccfb8)",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography textAlign="center" fontSize={14}>
          Already have an account?{" "}
          <Link component={RouterLink} to="/signin" underline="hover">
            Sign In
          </Link>
        </Typography>
      </Card>
    </>
  );
}
