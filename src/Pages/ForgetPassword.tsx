import { Box, Button, Container, Typography } from '@mui/material';
import Footer from '../Compenents/Footer';
import HeaderNav from '../Compenents/HeaderNav';
import Navbar from '../Compenents/Navbar';
import ScrollToTop from '../Compenents/ScrollToTop';

function ForgetPassword() {
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
                        <Typography variant="h5" textAlign="center" fontWeight="bold" marginBottom={2}>
                            Forget Password
                        </Typography>
                        <div className="signUp-drawer">
                            <div className="input">
                                <label htmlFor="email">E-Mail</label>
                                <input style={{ marginTop: '15px' }} type="text" placeholder="E-Mail" id="email" className="input-field" />
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
                            >
                                Reset Password
                            </Button>
                        </div>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}

export default ForgetPassword;
