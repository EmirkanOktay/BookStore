import { Box, Container, Grid, TextField, Typography, Button } from "@mui/material";
import Footer from "../Compenents/Footer";
import HeaderNav from "../Compenents/HeaderNav";
import Navbar from "../Compenents/Navbar";
import ScrollToTop from "../Compenents/ScrollToTop";
import UserProfile from "../Compenents/UserProfile";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

const validationSchemaForAccountInfo = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    lastName: Yup.string().trim().required("Last name is required"),
    address: Yup.string().trim().required("Address is required"),
    postalCode: Yup.string().trim().required("Postal code is required").matches(/^[0-9]*$/, "Postal code must include only numbers"),
    birthday: Yup.string().trim().required("Birthday is required"),
    phoneNumber: Yup.string().trim().required("Phone number is required").matches(/^[0-9]*$/, "Phone number must include only numbers"),
    email: Yup.string().trim().lowercase().required("Email is required").email("Invalid email format")
});

function UserLocation() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    const currentDay = String(date.getDate()).padStart(2, "0");
    const currentFullDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const [getUserBirth] = useState("");
    const [getPhone] = useState("");
    const [getEmail] = useState("");
    const [userData] = useState({
        name: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = (values: any) => {
        console.log("Form submitted:", values);
    };

    return (
        <div>
            <Navbar />
            <HeaderNav />
            <ScrollToTop />
            <Container sx={{ mt: 4, marginBottom: "40px" }}>
                <Formik
                    initialValues={{
                        name: userData.name,
                        lastName: userData.lastName,
                        birthday: getUserBirth,
                        phoneNumber: getPhone,
                        email: getEmail,
                        address: "",
                        postalCode: "",
                    }}
                    validationSchema={validationSchemaForAccountInfo}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, values, errors, touched }) => (
                        <Form>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <UserProfile userData={userData} />
                                </Grid>

                                <Grid item xs={12} md={8}>
                                    <Box
                                        sx={{
                                            p: 4,
                                            borderRadius: 3,
                                            boxShadow: 3,
                                            bgcolor: "background.paper",
                                        }}
                                    >
                                        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ marginBottom: "20px" }}>
                                            Account Information
                                        </Typography>

                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    fullWidth
                                                    name="name"
                                                    label="First Name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.name && Boolean(errors.name)}
                                                    helperText={touched.name && errors.name}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    fullWidth
                                                    name="lastName"
                                                    label="Last Name"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.lastName && Boolean(errors.lastName)}
                                                    helperText={touched.lastName && errors.lastName}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    fullWidth
                                                    name="birthday"
                                                    label="Birthday"
                                                    type="date"
                                                    InputLabelProps={{ shrink: true }}
                                                    inputProps={{ max: currentFullDate }}
                                                    value={values.birthday}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.birthday && Boolean(errors.birthday)}
                                                    helperText={touched.birthday && errors.birthday}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <Field
                                                    fullWidth
                                                    name="phoneNumber"
                                                    label="Phone Number"
                                                    type="tel"
                                                    placeholder="555 123 45 67"
                                                    value={values.phoneNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                                    helperText={touched.phoneNumber && errors.phoneNumber}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Field
                                                    fullWidth
                                                    name="email"
                                                    label="Email"
                                                    type="email"
                                                    placeholder={userData.email || "yourmail@example.com"}
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.email && Boolean(errors.email)}
                                                    helperText={touched.email && errors.email}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Field
                                                    fullWidth
                                                    name="address"
                                                    label="Address"
                                                    value={values.address}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.address && Boolean(errors.address)}
                                                    helperText={touched.address && errors.address}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Field
                                                    fullWidth
                                                    name="postalCode"
                                                    label="Postal Code"
                                                    value={values.postalCode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    component={TextField}
                                                    error={touched.postalCode && Boolean(errors.postalCode)}
                                                    helperText={touched.postalCode && errors.postalCode}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    size="large"
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: 2,
                                                        bgcolor: "red",
                                                    }}
                                                    type="submit"
                                                >
                                                    Save Changes
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Container>
            <Footer />
        </div>
    );
}

export default UserLocation;