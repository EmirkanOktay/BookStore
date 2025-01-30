import { Box, Container, Typography } from "@mui/material"
import Navbar from "../Compenents/Navbar"
import ScrollToTop from "../Compenents/ScrollToTop"
import HeaderNav from "../Compenents/HeaderNav"
import Footer from "../Compenents/Footer"

function Contact() {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <HeaderNav />
            <Box sx={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <Container>
                    <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: '40px' }}>
                        Contact Us
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                        For partnerships, promotional opportunities, and advertising inquiries, please email us at:
                        <strong> promotions@bookstore.org</strong>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Interested in joining our team? Email us at: <strong>jobs@bookstore.org</strong>
                    </Typography>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}

export default Contact;