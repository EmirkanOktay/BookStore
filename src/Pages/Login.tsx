import { useState } from "react";
import { useMemberStatus } from "../Redux/UserStatusSlicer";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseInital";
import Footer from "../Compenents/Footer";
import ScrollToTop from "../Compenents/ScrollToTop";
import Navbar from "../Compenents/Navbar";
import HeaderNav from "../Compenents/HeaderNav";
import { Formik, Field, Form } from "formik";
import { validationSchemaForLogin } from "../Yup/Yup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";

function Login() {
    const [visibilityOfPassword, setVisibilityOfPassword] = useState(false);
    const { memberStatus, setMemberStatus } = useMemberStatus();

    const showOrHidePassword = () => {
        setVisibilityOfPassword(!visibilityOfPassword);
    };

    const navigate = useNavigate();

    const handleLogin = async (values: any) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const user = userCredential.user;
            if (user) {
                setMemberStatus(true);
                toast.success("Succesfuly Login")
                navigate("/");
            }
        } catch (error: any) {
            toast.error("Error creating account: " + error.message);
        }
    };

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <HeaderNav />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh", marginBottom: "30px" }}>
                <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: 400, padding: 4, marginTop: "50px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "white" }}>
                        <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchemaForLogin} onSubmit={handleLogin}>
                            {({ handleSubmit, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Typography variant="h5" textAlign="center" fontWeight="bold" marginBottom={2}>
                                        Login
                                    </Typography>
                                    <div className="signUp-drawer">
                                        <div className="input ">
                                            <label htmlFor="email">E-Mail</label>
                                            <Field type="text" placeholder="E-Mail" id="email" name="email" className="input-field" />
                                            {touched.email && errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                                        </div>
                                        <div className="input ">
                                            <label htmlFor="password">Password</label>
                                            <div style={{ position: "relative", marginBottom: "15px" }}>
                                                <Field type={visibilityOfPassword ? "text" : "password"} placeholder="Password" id="password" name="password" className="input-field" />
                                                <div onClick={showOrHidePassword} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer", color: "#888" }}>
                                                    {visibilityOfPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                </div>
                                            </div>
                                            {touched.password && errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                                        </div>

                                        <Button className="navbar-accountButton" sx={{ marginTop: "20px", width: "100%", backgroundColor: "black", color: "white", borderRadius: "13px", padding: "10px", fontSize: "16px", "&:hover": { backgroundColor: "#333" } }} type="submit">
                                            Login
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

export default Login;
