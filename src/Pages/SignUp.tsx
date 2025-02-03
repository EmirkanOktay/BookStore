import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "../Compenents/Navbar";
import HeaderNav from "../Compenents/HeaderNav";
import Footer from "../Compenents/Footer";
import { memberStatus } from "../Pages/memberStatus/memberStatus";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import "../Css/SignUp.css";
import ScrollToTop from "../Compenents/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Formik, Field } from "formik";
import { validationSchemaForSignUp } from "../Yup/Yup";
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import { db } from "../Firebase/FirebaseInital";
import { app } from "../Firebase/FirebaseInital";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);

function SignUp() {
    interface formsForSignUp {
        name: string;
        lastName: string;
        email: string;
        password: string;
        rePassword: string;
    }

    const initalValues: formsForSignUp = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
    };

    const handleSubmit = async (values: formsForSignUp) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );

            const user = userCredential.user;

            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    name: values.name,
                    lastName: values.lastName,
                    email: values.email,
                });

                toast.success("Your Account Has Been Created");
            }
            navigate("/");

        } catch (error: any) {
            toast.error("Error creating account: " + error.message);
        }
    };

    const [visibiltyOfPassword, setVisibiltyOfPassword] = useState(false);
    const [visibiltyOfPassword2, setVisibiltyOfPassword2] = useState(false);

    const showOrHidePassword = () => {
        setVisibiltyOfPassword(!visibiltyOfPassword);
    };

    const showOrHidePassword2 = () => {
        setVisibiltyOfPassword2(!visibiltyOfPassword2);
    };

    const navigate = useNavigate();

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <HeaderNav />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh", marginBottom: "30px" }}>
                <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{
                        width: 400,
                        padding: 4,
                        marginTop: "50px",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "white"
                    }}>
                        {memberStatus === false ? (
                            <Formik
                                initialValues={initalValues}
                                validationSchema={validationSchemaForSignUp}
                                onSubmit={handleSubmit}
                            >
                                {({ handleSubmit, errors, touched }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Typography variant="h5" textAlign="center" fontWeight="bold" marginBottom={2}>
                                            Sign Up
                                        </Typography>
                                        <div className="signUp-drawer">
                                            <div className="input">
                                                <label htmlFor="name-signup">Name</label>
                                                <Field
                                                    type="text"
                                                    placeholder="Name"
                                                    id="name-signup"
                                                    name="name"
                                                    className="input-field"
                                                />
                                                {touched.name && errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                                            </div>
                                            <div className="input">
                                                <label htmlFor="lastNameSignUp">Last Name</label>
                                                <Field
                                                    type="text"
                                                    placeholder="Last Name"
                                                    id="lastNameSignUp"
                                                    name="lastName"
                                                    className="input-field"
                                                />
                                                {touched.lastName && errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
                                            </div>
                                            <div className="input">
                                                <label htmlFor="email">E-Mail</label>
                                                <Field
                                                    type="text"
                                                    placeholder="E-Mail"
                                                    id="email"
                                                    name="email"
                                                    className="input-field"
                                                />
                                                {touched.email && errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                                            </div>
                                            <div className="input">
                                                <label htmlFor="password">Password</label>
                                                <div style={{ position: "relative", marginBottom: "15px" }}>
                                                    <Field
                                                        type={visibiltyOfPassword ? "text" : "password"}
                                                        placeholder="Password"
                                                        id="password"
                                                        name="password"
                                                        className="input-field"
                                                    />
                                                    <div
                                                        onClick={showOrHidePassword}
                                                        style={{
                                                            position: "absolute",
                                                            top: "50%",
                                                            right: "10px",
                                                            transform: "translateY(-50%)",
                                                            cursor: "pointer",
                                                            color: "#888",
                                                        }}
                                                    >
                                                        {visibiltyOfPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                    </div>
                                                </div>
                                                {touched.password && errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                                            </div>
                                            <div className="input">
                                                <label htmlFor="rePassword">Confirm Password</label>
                                                <div style={{ position: "relative", marginBottom: "15px" }}>
                                                    <Field
                                                        type={visibiltyOfPassword2 ? "text" : "password"}
                                                        placeholder="Confirm Password"
                                                        id="password2"
                                                        name="rePassword"
                                                        className="input-field"
                                                    />
                                                    <div
                                                        onClick={showOrHidePassword2}
                                                        style={{
                                                            position: "absolute",
                                                            top: "50%",
                                                            right: "10px",
                                                            transform: "translateY(-50%)",
                                                            cursor: "pointer",
                                                            color: "#888",
                                                        }}
                                                    >
                                                        {visibiltyOfPassword2 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                    </div>
                                                </div>
                                                {touched.rePassword && errors.rePassword && <div style={{ color: "red" }}>{errors.rePassword}</div>}
                                            </div>

                                            <p className="forget-password" onClick={() => navigate("/login")}>Already have an account?</p>

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
                                                    "&:hover": { backgroundColor: "#333" },
                                                }}
                                                type="submit"
                                            >
                                                Sign Up
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        ) : (
                            <Typography>Some other content when memberStatus is true</Typography>
                        )}
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}

export default SignUp;
