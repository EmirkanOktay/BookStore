import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../Css/HeaderNav.css';

function HeaderNav() {
    const items = ["Story", "Fairy Tale", "Fiction", "History", "Crime", "Prepare Exams", "Toys", "Suggestions"];

    return (
        <Box
            sx={{
                display: { xs: 'none', sm: 'block' }
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
                    <p className="item" key={index}>{item}</p>
                ))}
            </Typography>
        </Box>
    );
}

export default HeaderNav;
