import { Box, Container, Typography } from "@mui/material"
import HeaderNav from "../Compenents/HeaderNav"
import Navbar from "../Compenents/Navbar"
import ScrollToTop from "../Compenents/ScrollToTop"
import Footer from "../Compenents/Footer"

function AboutUs() {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <HeaderNav />
            <Box>
                <Container>
                    <Typography variant="h5" sx={{ marginTop: '30px' }}>
                        ABOUT US
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '40px', marginBottom: '20px' }}>
                        Our Commitment to Books
                    </Typography>
                    <p>
                        Ours is a passionate journey with books, one that started 40 years ago with the excitement of reading and bringing the finest books to readers. Ours is the happiness of sparking a journey of enlightenment with every book we deliver! Books have brought us happiness for 40 years, and to share our happiness with more book lovers, we have opened new bookstores and welcomed millions of readers at the largest bookstore in Europe. Since 2015, we’ve also started sending books to book lovers across every corner of our country via our website. Today, we experience the joy of delivering tens of millions of books to millions of readers. As the BookStore family, we work every day with sincerity to provide you with better service. We wish you happy reading!
                    </p>

                    <Typography variant="h6" sx={{ marginTop: '40px', marginBottom: '20px' }}>
                        Vision
                    </Typography>
                    <p>
                        To be the leading brand in the industry, offering books economically and quickly, providing excellent customer service that delights book lovers, and contributing to the enlightenment of our country.
                    </p>

                    <Typography variant="h6" sx={{ marginTop: '40px', marginBottom: '20px' }}>
                        Mission
                    </Typography>
                    <p>
                        To bring happiness to book lovers from all ages by offering books at affordable prices, with fast delivery and quality customer communication, and to support the cultural development of our country by leading the spread of reading books.
                    </p>

                    <Typography variant="h6" sx={{ marginTop: '40px', marginBottom: '20px' }}>
                        Values
                    </Typography>
                    <ol style={{ marginTop: '30px' }}>
                        <li className="li-policy">Book lovers are our reason for existence, and we believe that the world will be a better place with them. Providing high-quality service to book lovers is our core company philosophy. The trust we have built from our brand's history to today is our most important asset. We strive to maintain the sincerity of a local shopkeeper in all of our work.</li>
                        <li className="li-policy">The love of books is the fundamental understanding that sustains us. We wholeheartedly respect the knowledge and science passed through books for centuries. We care about our employees and regard them as respected ambassadors of knowledge. We respect differences and try to embrace various perspectives for growth. As a brand and as employees, we adopt humble behavior. We believe that love for nature and animals will create a better future. We believe in helping others and wholeheartedly support the ideal of sending books to those in need. We love our country and work idealistically to contribute to its cultural development.</li>
                        <li className="li-policy">We make maximum efforts to provide excellent service operationally. We focus on efficiency and eliminate any inefficient processes. We adopt a results-oriented approach and plan our work based on this principle. We believe in the principle of simplicity to achieve correct results. Innovation is the main source of our development. We value teamwork and move forward with employees who continuously improve themselves and their teams. We aim to lead the industry and spread the love for reading books.</li>
                    </ol>
                </Container>
            </Box>
            <Footer />

        </div>
    )
}

export default AboutUs