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
import ForgotPassword from "../Components/ForgotPassword";

const Card = styled(MuiCard)(({ theme }) => ({
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
  border: "1px solid #000",
}));

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    backgroundColor: "transparent",
    border: "1px solid #000",

    "& fieldset": {
      borderColor: "rgba(0,0,0,0.25)",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
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

export default function SignIn() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = React.useState({});
  const [open, setOpen] = React.useState(false);

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
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Login Data:", form);
  
  };

  return (
    <>
      <CssBaseline />

      <Card>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          letterSpacing={1}
        >
          Sign In
        </Typography>

        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.8 }}>
          Welcome back to <strong>Gulmohar Grand</strong>
        </Typography>

        <Box component="form" onSubmit={handleSubmit} mt={1}>
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
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
            }
            label="Remember me"
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
            Sign In
          </Button>

          <Link
            component="button"
            onClick={() => setOpen(true)}
            sx={{
              display: "block",
              mt: 2,
              color: "#000",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Forgot password?
          </Link>

          <ForgotPassword open={open} handleClose={() => setOpen(false)} />
        </Box>

        <Typography textAlign="center" fontSize={14}>
          Don&apos;t have an account?{" "}
          <Link component={RouterLink} to="/signup" underline="hover">
            Sign Up
          </Link>
        </Typography>
      </Card>
    </>
  );
}
