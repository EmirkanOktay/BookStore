import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Compenents/Navbar';
import HeaderNav from '../Compenents/HeaderNav';
import Footer from '../Compenents/Footer';

function NotFound() {
    return (
        <div>
            <Navbar />
            <HeaderNav />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5">Page Not Found</Typography>
                </Container>
            </Box>
            <Footer />
        </div>
    );
}

export default NotFound;
