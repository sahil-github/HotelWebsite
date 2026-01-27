import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone number")
    .required("Phone is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  comments: Yup.string().required("Comments are required"),
});

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contactMessages")) || [];
    console.log("Saved messages:", saved);
  }, []);

  return (
    <Box sx={{
        width: "100%",
         minHeight: "100vh",
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
        px: { xs: 2, md: 12  }, py: 1 ,
      }}>
      <Typography variant="h4" fontWeight={700} ml={2} mt={2} align="center">
        MESSAGE US!
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 12  }, py: 1 }}>
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container direction="column" spacing={4}>
            <Grid>
              <Box display="flex" gap={2} >
                <LocationOnIcon color="error" />
                <Box>
                  <Typography fontWeight={600}>ADDRESS</Typography>
                  <Typography variant="body2">
                    Plot No.14, Panjari Road, Nagpur, India
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid>
              <Box display="flex" gap={2}>
                <PhoneIcon color="error" />
                <Box>
                  <Typography fontWeight={600}>PHONE & EMAIL</Typography>
                  <Typography variant="body2">+91-9209861027</Typography>
                  <Typography variant="body2">
                    hotelgulmoharbar2024@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid>
              <Box display="flex" gap={2}>
                <AccessTimeIcon color="error" />
                <Box>
                  <Typography fontWeight={600}>WORKING TIME</Typography>
                  <Typography variant="body2">24 Hours</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid>
              <iframe
                title="map"
                src="https://maps.google.com/maps?hl=en&q=gulmohar%20grand%20nagpur&z=14&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 8 }}
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT FORM */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Complete the form to continue!
          </Typography>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              city: "",
              country: "",
              comments: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const existing =
                JSON.parse(localStorage.getItem("contactMessages")) || [];
              existing.push(values);
              localStorage.setItem("contactMessages", JSON.stringify(existing));

              setSuccess(true);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        required
                      />

                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.city && Boolean(errors.city)}
                        helperText={touched.city && errors.city}
                        required
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        required
                      />

                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.country && Boolean(errors.country)}
                        helperText={touched.country && errors.country}
                        required
                      />
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Comments"
                      name="comments"
                      value={values.comments}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.comments && Boolean(errors.comments)}
                      helperText={touched.comments && errors.comments}
                      required
                    />
                  </Grid>

                  <Grid
                    size={{ xs: 12 }}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2,
                        px: 4,
                        borderRadius: 2,
                        bgcolor: "#d32f2f",
                        "&:hover": { bgcolor: "#b71c1c" },
                      }}
                    >
                      Send →
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" variant="filled">
          Message saved locally!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
