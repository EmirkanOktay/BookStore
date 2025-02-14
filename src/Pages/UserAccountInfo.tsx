import { Box, Container, Grid, TextField, Typography, Button } from "@mui/material";
import Footer from "../Compenents/Footer";
import HeaderNav from "../Compenents/HeaderNav";
import Navbar from "../Compenents/Navbar";
import ScrollToTop from "../Compenents/ScrollToTop";
import UserProfile from "../Compenents/UserProfile";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseInital";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchemaForAccountInfo = Yup.object().shape({
    birthday: Yup.string().trim().required("Birthday is required"),
    phoneNumber: Yup.string().trim().required("Phone number is required").matches(/^[0-9]*$/, "Phone number must include only numbers"),
    email: Yup.string().trim().lowercase().required("Email is required").email("Invalid email format")
});

function MyAccountInfo() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    const currentDay = String(date.getDate()).padStart(2, "0");
    const currentFullDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const [getUserBirth] = useState("");
    const [getPhone] = useState("");
    const [getEmail, setGetEmail] = useState("");
    const [userData, setUserData] = useState({
        name: "",
        lastName: "",
        email: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    setUserData(userDocSnap.data() as { name: string; lastName: string; email: string });
                    setGetEmail(userDocSnap.data().email);
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <Navbar />
            <HeaderNav />
            <ScrollToTop />
            <Container sx={{ mt: 4, marginBottom: "40px" }}>
                <Formik
                    initialValues={{
                        birthday: getUserBirth,
                        phoneNumber: getPhone,
                        email: getEmail,
                    }}
                    validationSchema={validationSchemaForAccountInfo}
                    onSubmit={(values) => {
                        console.log("Form submitted:", values);
                    }}
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
                                                    name="birthday"
                                                    label="Birthday"
                                                    type="date"
                                                    InputLabelProps={{ shrink: true }}
                                                    inputProps={{ max: currentFullDate }}
                                                    as={TextField}
                                                    value={values.birthday}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
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
                                                    as={TextField}
                                                    value={values.phoneNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

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
                                                    as={TextField}
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.email && Boolean(errors.email)}
                                                    helperText={touched.email && errors.email}
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

export default MyAccountInfo;