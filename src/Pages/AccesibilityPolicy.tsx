import { Box, Container, Typography } from "@mui/material"
import Footer from "../Compenents/Footer"
import HeaderNav from "../Compenents/HeaderNav"
import Navbar from "../Compenents/Navbar"
import ScrollToTop from "../Compenents/ScrollToTop"
import '../Css/policy.css'
function AccesibilityPolicy() {
    return (

        <div>
            <ScrollToTop />
            <Navbar />
            <HeaderNav />
            <Box>
                <Container>
                    <Typography variant="h5" sx={{ marginTop: '30px' }}>
                        BOOKSTORE ACCESSIBILITY POLICY
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '40px', marginBottom: '20px' }}>
                        ‍Our Commitment to Accessibility
                    </Typography>
                    <p>‍At bookstore.org, we are committed to creating an inclusive and accessible environment for all of our customers and ensuring that our content, products and services are accessible to individuals with disabilities.  For our website and online digital services, we use the guidelines of Web Content Accessibility Guidelines (WCAG) 2.2, Level AA standards as set out in the Web Content Accessibility Guidelines (the “Standards”) as a model.  The Standards detail how to make web content more accessible to individuals with disabilities. We will regularly review our website and services in comparison to the Standards using recognized accessibility evaluation tools. Ultimately, conformance with the Standards will help make the web more user-friendly for all of our customers. Nonetheless, if you encounter any difficulty using our website or services, have suggestions about improving the usability or accessibility of our website or services, or would like to know more about our commitment to accessibility, please contact us using the contact information below.</p>

                    <Typography variant="h6" sx={{ marginTop: '40px', marginBottom: '20px' }}>
                        ‍Our Accessibility Steps
                    </Typography>
                    <p>‍As part of our commitment to creating an inclusive and accessible shopping environment, here are some steps we have taken and plan to take to make our website and services more accessible to our customers with disabilities:</p>
                    <ol style={{ marginTop: '30px' }}>
                        <li className="li-policy">We have made our website as accessible as possible to customers with disabilities, including by adding alternative text to images, minimizing the use of color to convey information, improving contrast ratios, implementing Accessible Rich Internet Application (ARIA) authoring practices, and enabling screen readers, all in compliance with the Standards.
                        </li>
                        <li className="li-policy"> We plan to conduct accessibility audits and provide specific recommendations to facilitate website and services accessibility and conformance with the Standards.</li>
                        <li className="li-policy"> We will make available a dedicated accessibility email address, accessibility@bookstore.org, in order to address any accessibility issues that users of the website or services may encounter.</li>
                        <li>We have made our products and services accessible to customers with disabilities and intend to offer alternative content formats such as ebooks, audio books.
                        </li>
                        <li className="li-policy">We have made sure that our employees are kept abreast of the laws and regulations related to accessibility — such as the Americans with Disabilities Act (ADA) — to ensure compliance.</li>
                        <li className="li-policy">Our customer service staff recognize the importance of inclusion, and are equipped to handle situations that may arise for customers with disabilities.</li>
                        <li className="li-policy">We have adopted this Accessibility Policy to support our ongoing commitment to the accessibility of our website and services.</li>
                        <li className="li-policy">By using our website or services, you acknowledge that you understand and agree to the guidelines outlined in this Accessibility Policy.</li>
                    </ol>
                </Container>
            </Box>
            <Footer />
        </div>
    )
}

export default AccesibilityPolicy