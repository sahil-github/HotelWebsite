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
import ForgotPassword from "../Components/ForgotPassword";

const Card = styled(MuiCard)(() => ({
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
    "& fieldset": { borderColor: "rgba(0,0,0,0.25)" },
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
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters required")
    .required("Password is required"),
});

export default function SignIn() {
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Login Data:", values);
    },
  });

  return (
    <>
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", py: 6 }}>
       <CssBaseline />
          <Card>
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Sign In
        </Typography>

        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.8 }}>
          Welcome back to <strong>Gulmohar Grand</strong>
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} mt={1}>
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={textFieldStyles}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                checked={formik.values.remember}
                onChange={formik.handleChange}
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
          <Link component={RouterLink} to="/signup" underline_attach="hover">
            Sign Up
          </Link>
        </Typography>
      </Card>
    </Box>
     

  
    </>
  );
}
