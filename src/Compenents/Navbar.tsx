import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import '../Css/Navbar.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '80%',
    border: '1px solid gray',

    [theme.breakpoints.up('sm')]: {
        width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
        width: ' 100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(2),
    marginRight: '10px',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    },

    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.5),
    },
}));

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuItems = [
        'Fiction',
        'Non-fiction',
        'Mystery',
        'Romance',
        'Science Fiction',
        'Fantasy',
        'Historical Fiction',
        'Thriller',
        'Biography',
        'Self-help'
    ];
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerOpenForFavorite, setDrawerOpenForFavorite] = useState(false);
    const [drawerOpenForCart, setDrawerOpenForCart] = useState(false);
    const [drawerOpenForAccount, setDrawerOpenForAccount] = useState(false);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const toggleDrawerForFav = () => {
        setDrawerOpenForFavorite(!drawerOpenForFavorite);
    }
    const toggleDrawerForAccount = () => {
        setDrawerOpenForAccount(!drawerOpenForAccount);
    }

    const toggleDrawerForCart = () => {
        setDrawerOpenForCart(!drawerOpenForCart);
    }




    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className='head'
                        sx={{
                            display: { xs: 'block', sm: 'block' },
                            fontWeight: 'bold',
                            flexGrow: { xs: 1, sm: 0 },
                            fontSize: { xs: '14px', sm: 'inherit', md: '20px' },
                            '@media (max-width: 950px)': {
                                display: 'none'
                            },
                        }}
                    >
                        BookStore
                    </Typography>

                    <Button className='menu'
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            borderRadius: '10px',
                            padding: { xs: '0 8px', sm: '6px 16px' },
                            '&:hover': {
                                backgroundColor: 'red',
                                color: 'white',
                            },
                        }}
                        color="inherit"
                        startIcon={<WidgetsIcon />}
                        onClick={handleMenuOpen}
                    >
                        Menu
                        <KeyboardArrowDownIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
                    </Button>

                    <Button
                        className="responsive-menu"
                        sx={{
                            display: { xs: 'block', sm: 'block', md: 'none' },
                            borderRadius: '10px',
                            padding: { xs: '0 8px', sm: '6px 16px' },
                        }}
                        color="inherit"
                        startIcon={<MenuIcon />}
                        onClick={toggleDrawer}
                    />

                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer}
                    >
                        <Box sx={{ width: 250, padding: 2 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, borderBottom: '1px solid' }}>
                                Menu
                            </Typography>
                            {menuItems.map((item) => (
                                <MenuItem key={item} onClick={handleMenuClose}>
                                    <p style={{ borderBottom: '1px solid red' }}>{item}</p>
                                </MenuItem>
                            ))}
                        </Box>
                    </Drawer>


                    <Search className='search'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 2 },
                        }}
                    >
                        <Menu
                            anchorEl={menuAnchorEl}
                            open={Boolean(menuAnchorEl)}
                            onClose={handleMenuClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item} onClick={handleMenuClose}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Menu>

                        <StyledIconButton color="inherit" className="favorite" onClick={toggleDrawerForFav}>
                            <Badge badgeContent={2} color="error">
                                <FavoriteIcon />
                            </Badge>
                        </StyledIconButton>

                        <Drawer
                            anchor="right"
                            open={drawerOpenForFavorite}
                            onClose={toggleDrawerForFav}
                        >
                            <Box sx={{ width: 250, padding: 2 }}>
                                <Typography variant="h6" sx={{ marginBottom: 2, borderBottom: '1px solid' }}>
                                    Later...
                                </Typography>

                            </Box>
                        </Drawer>

                        <StyledIconButton color="inherit" className='icons' onClick={toggleDrawerForCart}>
                            <Badge badgeContent={5} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </StyledIconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpenForCart}
                            onClose={toggleDrawerForCart}
                        >
                            <Box sx={{ width: 250, padding: 2 }}>
                                <Typography variant="h6" sx={{ marginBottom: 2, borderBottom: '1px solid' }}>
                                    Later...
                                </Typography>

                            </Box>
                        </Drawer>

                        <StyledIconButton color="inherit" className='icons' onClick={toggleDrawerForAccount}>
                            <AccountCircleIcon />
                        </StyledIconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpenForAccount}
                            onClose={toggleDrawerForAccount}
                        >
                            <Box sx={{ width: 250, padding: 2 }}>
                                <Typography variant="h6" sx={{ marginBottom: 2, borderBottom: '1px solid' }}>
                                    Later...
                                </Typography>

                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar; 