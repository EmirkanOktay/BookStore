import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../Compenents/Footer';
import HeaderNav from '../Compenents/HeaderNav';
import Navbar from '../Compenents/Navbar';
import ScrollToTop from '../Compenents/ScrollToTop';
import { Formik, Field, Form } from 'formik';
import { validationSchemaForResetPassword } from '../Yup/Yup';
import { toast } from 'react-toastify';

function ForgetPassword() {

    const initialValues = {
        email: ""
    };

    const handleSubmit = (values: any) => {
        if (values.email) {
            toast.success("Password Reset Request Has Been Sent");
        } else {
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <HeaderNav />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh", marginBottom: '30px' }}>
                <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{
                        width: 400,
                        padding: 4,
                        marginTop: "50px",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "white"
                    }}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchemaForResetPassword}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Typography variant="h5" textAlign="center" fontWeight="bold" marginBottom={2}>
                                        Forget Password
                                    </Typography>
                                    <div className="signUp-drawer">
                                        <div className="input">
                                            <label htmlFor="email">E-Mail</label>
                                            <Field
                                                type="text"
                                                placeholder="E-Mail"
                                                id="email"
                                                name="email"
                                                className="input-field"
                                            />
                                            {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                                        </div>

                                        <Button
                                            className="navbar-accountButton"
                                            sx={{
                                                marginTop: "20px",
                                                width: "100%",
                                                backgroundColor: "black",
                                                color: "white",
                                                borderRadius: "13px",
                                                padding: "10px",
                                                fontSize: "16px",
                                                "&:hover": { backgroundColor: "#333" }
                                            }}
                                            type="submit"
                                        >
                                            Reset Password
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}

export default ForgetPassword;
