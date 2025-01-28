import { Box, Button, Typography } from '@mui/material';
import '../Css/SectionSecond.css';

function SectionSecond() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                backgroundColor: 'rgb(250, 246, 246)',
                padding: '40px 20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography className='box-secondSection'>
                <span className='span-second'>Sign up for our Newsletter</span>
                <Button className='button-sectionSecond'>Sign Up</Button>
                <p className='p-sectionSecond'>Tell us what books you love.</p>
            </Typography>
        </Box>
    );
}

export default SectionSecond;
