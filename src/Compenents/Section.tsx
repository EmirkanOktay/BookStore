import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Typography } from '@mui/material';
import '../Css/Section.css';

function Section() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <div className='box-section'>
                <div className='group'>
                    <Typography variant='body1'>
                        <CategoryIcon className='icon' />
                        <span>The Correct Address Of Many Books</span>
                    </Typography>
                </div>
                <div className='group'>
                    <Typography variant='body1'>
                        <AccountBalanceIcon className='icon' />
                        <span>Secure Payment</span>
                    </Typography>
                </div>
                <div className='group2'>
                    <Typography variant='body1'>
                        <LocalShippingIcon className='icon' />
                        <span>Fast Delivery</span>
                    </Typography>
                </div>
            </div>
        </Box>
    );
}

export default Section;