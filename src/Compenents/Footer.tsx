import { Box, Grid, Container } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import MailIcon from '@mui/icons-material/Mail';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import paymentImages from '../images/paymentImages.webp';
import '../Css/Footer.css';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <div style={{ backgroundColor: 'rgb(250, 246, 246)' }}>
            <Box>
                <Container>
                    <Grid container spacing={-1} className="footer-grid">
                        <Grid item xs={12} sm={12} md={12} lg={3} className="footer-gird-container">
                            <h3 className="footer-head">Categories</h3>
                            <ul className="footer-item-ul">
                                <li className="footer-item-li">Fiction</li>
                                <li className="footer-item-li">Mystery</li>
                                <li className="footer-item-li">History</li>
                                <li className="footer-item-li">Fairy Tale</li>
                                <li className="footer-item-li">Toys</li>
                                <li className="footer-item-li">Prepare Exams</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} className="footer-gird-container">
                            <h3 className="footer-head">About Us</h3>
                            <ul className="footer-item-ul">
                                <li className="footer-item-li">Who Are We</li>
                                <li className="footer-item-li">Terms of Use</li>
                                <li className="footer-item-li">Digital Terms of Use</li>
                                <li className="footer-item-li">Returns and Refund Policy</li>
                                <li className="footer-item-li">Contact</li>
                                <li className="footer-item-li">Accessibility Notice</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} className="footer-gird-container">
                            <h3 className="footer-head">Membership</h3>
                            <ul className="footer-item-ul">
                                <li className="footer-item-li">Sign Up</li>
                                <li className="footer-item-li">Register</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3} className="footer-gird-container">
                            <p className="footer-head-p">Follow us on social media!</p>
                            <ul className="footer-item-ul-social-media">
                                <li className="footer-item-li"><InstagramIcon /></li>
                                <li className="footer-item-li"><XIcon /></li>
                                <li className="footer-item-li"><YouTubeIcon /></li>
                                <li className="footer-item-li"><FacebookIcon /></li>
                                <li className="footer-item-li"><LinkedInIcon /></li>
                                <li className="footer-item-li"><RedditIcon /></li>
                            </ul>
                            <div className="footer-info">
                                <MailIcon className="icon" /> <span className="info-span">info@bookstore.com</span>
                                <HeadsetMicIcon className="icon" /> <span className="info-span">+123456789</span>
                            </div>
                            <div className="footer-payment">
                                <img src={paymentImages} alt="" />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <div className="Copyright ">
                <p>© {year} All Rights Reserved</p>
            </div>
        </div>

    )
}

export default Footer