import { useNavigate } from "react-router-dom";
import { userMemberStatus } from "../Redux/UserStatusSlicer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Badge, Box, Container, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatIcon from '@mui/icons-material/Chat';
import Navbar from "../Compenents/Navbar";
import HeaderNav from "../Compenents/HeaderNav";
import ScrollToTop from "../Compenents/ScrollToTop";
import Footer from "../Compenents/Footer";
import UserProfile from "../Compenents/UserProfile";


export const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 3,
    borderRadius: 2,
    boxShadow: 2,
    bgcolor: "background.paper",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
        boxShadow: 4,
        transform: "scale(1.05)"
    }
};
function UserAccount() {

    const navigate = useNavigate();
    const isMember = useSelector(userMemberStatus);

    useEffect(() => {
        if (!isMember) {
            navigate("/login");
        }
    }, [isMember, navigate]);

    if (!isMember) return null;


    return (
        <div>
            <Navbar />
            <HeaderNav />
            <ScrollToTop />

            <Container sx={{ mt: 4, marginBottom: '40px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <UserProfile />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                                gap: 2
                            }}
                        >
                            <Box sx={boxStyle}>
                                <div onClick={() => navigate("/pay")}>
                                    <ShoppingCartIcon sx={{ fontSize: 40, color: "primary.main" }} />
                                    <Typography>Payment</Typography>
                                </div>
                            </Box>
                            <Box sx={boxStyle}>
                                <div onClick={() => navigate("/myfavorites")}>
                                    <FavoriteIcon sx={{ fontSize: 40, color: "secondary.main" }} />
                                    <Typography>My Favorites</Typography>
                                </div>
                            </Box>
                            <Box sx={boxStyle}>
                                <div onClick={() => navigate("/myLocations")}>
                                    <LocationOnIcon sx={{ fontSize: 40, color: "success.main" }} />
                                    <Typography>My Location</Typography>
                                </div>
                            </Box>
                            <Box sx={boxStyle}>
                                <div onClick={() => navigate("/myMessages")}>
                                    <Badge badgeContent={5} color="error"><ChatIcon sx={{ fontSize: 40, color: "red " }} /></Badge>
                                    <Typography>Messages</Typography>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div >
    );
}


export default UserAccount;
