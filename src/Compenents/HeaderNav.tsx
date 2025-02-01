import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../Css/HeaderNav.css';
import { useNavigate } from 'react-router-dom';

export const items = ["Story", "Fairy Tale", "Fiction", "History", "Crime", "Suggestions"];

function HeaderNav() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                paddingTop: '64px',
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }
            }}
        >
            <Typography
                className="container"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {items.map((item, index) => (
                    <p className="item" onClick={() => navigate(`/genre/${item}`)} key={index}>{item}</p>
                ))}
            </Typography>
        </Box>
    );
}

export default HeaderNav;
