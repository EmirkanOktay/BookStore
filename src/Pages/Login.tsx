import { useState } from "react";
import Navbar from "../Compenents/Navbar";
import HeaderNav from "../Compenents/HeaderNav";
import { Box, Button, Container, Typography } from "@mui/material";
import { memberStatus } from "../MemberStatus/Member";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Footer from "../Compenents/Footer";
import ScrollToTop from "../Compenents/ScrollToTop";
import { useNavigate } from "react-router-dom";

function Login() {
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
                                    Login
                                </Typography>
                                <div className="signUp-drawer">
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
                                    </div>
                                    <p className="forget-password" onClick={() => navigate("/forget-password")}>Forget Password?</p>
                                    <p className="forget-password" onClick={() => navigate("/signup")}>Don't Have An Account?</p>

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



export default Login