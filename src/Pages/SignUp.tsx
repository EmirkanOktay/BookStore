import { Box, Button, Container, Typography } from "@mui/material";
import Navbar from "../Compenents/Navbar";
import HeaderNav from "../Compenents/HeaderNav";
import Footer from "../Compenents/Footer";
import { memberStatus } from "../MemberStatus/Member";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import "../Css/SignUp.css";
import ScrollToTop from "../Compenents/ScrollToTop";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [visibiltyOfPassword, setVisibiltyOfPassword] = useState(false);

    const showOrHidePassword = () => {
        setVisibiltyOfPassword(!visibiltyOfPassword);
    };

    const navigate = useNavigate();

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
                        {memberStatus === false ? (
                            <>
                                <Typography variant="h5" textAlign="center" fontWeight="bold" marginBottom={2}>
                                    Sign Up
                                </Typography>
                                <div className="signUp-drawer">
                                    <div className="input ">
                                        <label htmlFor="name-signup">Name</label>
                                        <input type="text" placeholder="Name" id="name-signup" className="input-field" />
                                    </div>
                                    <div className="input ">
                                        <label htmlFor="lastNameSignUp">Last Name</label>
                                        <input type="text" placeholder="Last Name" id="lastNameSignUp" className="input-field" />
                                    </div>
                                    <div className="input ">
                                        <label htmlFor="email">E-Mail</label>
                                        <input type="text" placeholder="E-Mail" id="email" className="input-field" />
                                    </div>
                                    <div className="input ">
                                        <label htmlFor="password">Password</label>
                                        <div style={{ position: "relative", marginBottom: "15px" }}>
                                            <input
                                                type={visibiltyOfPassword ? "text" : "password"}
                                                placeholder="Password"
                                                id="password"
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
                                    </div>    <div className="input ">
                                        <label htmlFor="password">Password</label>
                                        <div style={{ position: "relative", marginBottom: "15px" }}>
                                            <input
                                                type={visibiltyOfPassword ? "text" : "password"}
                                                placeholder="Password"
                                                id="password"
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
                                            "&:hover": { backgroundColor: "#333" }
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </>
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
