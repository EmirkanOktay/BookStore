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
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import '../Css/Navbar.css';
import { memberStatus } from '../memberStatus/memberStatus';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { validationSchemaForLogin } from '../Yup/Yup';
import Cart from './Cart';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseInital";


export interface formValuesForLogin {
    email: string,
    password: string,
}

export const initalValues: formValuesForLogin = {
    email: "",
    password: ""
}


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
export const menuItems = [
    'Fiction',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Historical Fiction',
    'Thriller',
    'Biography',
    'Self-help'
];


export const handleSubmit = async (values: formValuesForLogin) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
        );
        const user = userCredential.user;
        if (user) {
            toast.success("Succesfuly Login")
        }
    } catch (error: any) {
        toast.error("Error creating account: " + error.message);
    }
}

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
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

    const [visibiltyOfPassword, setVisibiltyOfPassword] = useState(false);

    const showOrHidePassword = () => {
        setVisibiltyOfPassword(!visibiltyOfPassword);
    }

    const [inputData, setInputData] = useState("");
    const searchProduct = (event: any) => {
        const trimmedQuery = inputData.trim();

        if (event.key === "Enter") {
            if (trimmedQuery === "") {
                toast.error("Empty Input Area!");
                return;
            }

            navigate(`/search/${trimmedQuery}`);

            setInputData("");
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'white', color: 'black' }}>
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
                            cursor: 'pointer',
                            '@media (max-width: 950px)': {
                                display: 'none'
                            },
                        }}
                        onClick={() => navigate("/")} >
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
                            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                                Categories
                            </Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            {menuItems.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => {
                                        navigate(`/genre/${item}`);
                                        toggleDrawer();
                                    }}
                                    sx={{
                                        padding: '10px 16px',
                                        borderRadius: '8px',
                                        marginBottom: '8px',
                                        transition: 'background-color 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                            color: 'red',
                                        },
                                    }}
                                >
                                    <div>{item}</div>
                                </MenuItem>
                            ))}
                            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold', borderTop: '1px solid' }} >
                                <div onClick={() => navigate("/")}>BookStore</div>
                            </Typography>
                        </Box>
                    </Drawer>


                    <Search className='search'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                            onKeyPress={searchProduct}
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
                                <MenuItem key={item} onClick={() => navigate(`/genre/${item}`)}>
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
                            <Box sx={{ width: 300, padding: 2, marginTop: '50px' }}>
                                {memberStatus === false ? (
                                    <>
                                        <Formik
                                            initialValues={initalValues}
                                            validationSchema={validationSchemaForLogin}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <Typography sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
                                                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                                                    </Typography>
                                                    <Typography sx={{ borderBottom: '1px solid', display: 'flex', justifyContent: 'center' }}>
                                                        My Account
                                                    </Typography>
                                                    <div className='signUp-drawer'>
                                                        <label htmlFor="email">E-Mail</label>
                                                        <input
                                                            type="text"
                                                            placeholder='E-Mail'
                                                            id="email"
                                                            name="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}
                                                        />
                                                        {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

                                                        <label htmlFor="password" style={{ display: 'block' }}>Password</label>
                                                        <div style={{ position: 'relative', marginTop: '10px' }}>
                                                            <input
                                                                type={visibiltyOfPassword ? "text" : "password"}
                                                                placeholder="Password"
                                                                id="password"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                style={{ display: 'block', width: '100%' }}
                                                            />
                                                            <div
                                                                onClick={showOrHidePassword}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    right: '10px',
                                                                    transform: 'translateY(-50%)',
                                                                    cursor: 'pointer',
                                                                    color: '#888',
                                                                }}
                                                            >
                                                                {visibiltyOfPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                            </div>
                                                        </div>
                                                        {touched.password && errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

                                                        <p className='forget-password' onClick={() => navigate("/forget-password")}>
                                                            Forget Password
                                                        </p>

                                                        <Button
                                                            className="navbar-accountButton"
                                                            sx={{
                                                                marginTop: '20px',
                                                                width: '100%',
                                                                backgroundColor: 'red',
                                                                color: 'white',
                                                                borderRadius: '13px'
                                                            }}
                                                            type="submit"
                                                        >
                                                            Login
                                                        </Button>
                                                        <Button
                                                            className="navbar-accountButton"
                                                            sx={{
                                                                marginTop: '20px',
                                                                width: '100%',
                                                                backgroundColor: 'black',
                                                                color: 'white',
                                                                borderRadius: '13px'
                                                            }}
                                                            onClick={() => navigate("/signup")}
                                                        >
                                                            Sign Up
                                                        </Button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </>

                                ) : (
                                    <Typography>Some other content when memberStatus is true</Typography>
                                )}

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
                                    <Cart />
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
                            <Box sx={{ width: 300, padding: 2, marginTop: '50px' }}>
                                {memberStatus === false ? (
                                    <Formik
                                        initialValues={initalValues}
                                        validationSchema={validationSchemaForLogin}
                                        onSubmit={handleSubmit}>
                                        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <Typography sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
                                                    <AccountCircleIcon sx={{ fontSize: '40px' }} />
                                                </Typography>
                                                <Typography sx={{ borderBottom: '1px solid', display: 'flex', justifyContent: 'center' }}>
                                                    My Account
                                                </Typography>
                                                <div className='signUp-drawer'>
                                                    <label htmlFor="email">E-Mail</label>
                                                    <input
                                                        type="text"
                                                        placeholder="E-Mail"
                                                        id="email"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}
                                                    />
                                                    {touched.email && errors.email && (
                                                        <div style={{ color: 'red' }}>{errors.email}</div>
                                                    )}

                                                    <label htmlFor="password" style={{ display: 'block' }}>Password</label>
                                                    <div style={{ position: 'relative', marginTop: '10px' }}>
                                                        <input
                                                            type={visibiltyOfPassword ? "text" : "password"}
                                                            placeholder="Password"
                                                            id="password"
                                                            name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            style={{ display: 'block', width: '100%' }}
                                                        />
                                                        <div
                                                            onClick={showOrHidePassword}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '50%',
                                                                right: '10px',
                                                                transform: 'translateY(-50%)',
                                                                cursor: 'pointer',
                                                                color: '#888',
                                                            }}
                                                        >
                                                            {visibiltyOfPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                        </div>
                                                    </div>
                                                    {touched.password && errors.password && (
                                                        <div style={{ color: 'red' }}>{errors.password}</div>
                                                    )}

                                                    <p className='forget-password' onClick={() => navigate("/forget-password")}>Forget Password</p>
                                                    <Button
                                                        className="navbar-accountButton"
                                                        sx={{
                                                            marginTop: '20px',
                                                            width: '100%',
                                                            backgroundColor: 'red',
                                                            color: 'white',
                                                            borderRadius: '13px',
                                                        }}
                                                        type="submit"
                                                    >
                                                        Login
                                                    </Button>
                                                    <Button
                                                        className="navbar-accountButton"
                                                        sx={{
                                                            marginTop: '20px',
                                                            width: '100%',
                                                            backgroundColor: 'black',
                                                            color: 'white',
                                                            borderRadius: '13px',
                                                        }}
                                                        onClick={() => navigate("/signup")}
                                                    >
                                                        Sign Up
                                                    </Button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                ) : (
                                    <Typography>Some other content when memberStatus is true</Typography>
                                )}
                            </Box>

                        </Drawer>
                    </Box>
                </Toolbar >
            </AppBar >
        </Box >
    );
};

export default Navbar; 