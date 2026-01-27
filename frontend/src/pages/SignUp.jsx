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
import { useFormik } from "formik";
import * as Yup from "yup";

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

// ✅ Yup Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      updates: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Signup Data:", values);
    },
  });

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
        }}
      >
        {" "}
        <CssBaseline />
        <Card>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Sign Up
          </Typography>

          <Typography variant="body2" textAlign="center" sx={{ opacity: 0.85 }}>
            Join <strong>Gulmohar Grand</strong> and start your journey
          </Typography>

          <Box component="form" onSubmit={formik.handleSubmit} mt={1}>
            <FormControl fullWidth margin="normal">
              <TextField
                name="name"
                placeholder="Full name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={textFieldStyles}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                name="email"
                placeholder="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={textFieldStyles}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={textFieldStyles}
              />
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  name="updates"
                  checked={formik.values.updates}
                  onChange={formik.handleChange}
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
      </Box>
    </>
  );
}
