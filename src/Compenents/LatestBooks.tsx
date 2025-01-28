import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
import { useEffect } from "react";
import { getLatestBook } from "../Redux/LatestBookSlicer";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/system';
import Skeleton from '@mui/material/Skeleton';  // Import Skeleton
import '../Css/LatestBooks.css';

function LatestBooks() {

    const dispatch = useDispatch<AppDispatch>();

    const { load, error, books } = useSelector((state: RootState) => state.latestBook);

    useEffect(() => {
        dispatch(getLatestBook());
    }, [dispatch]);

    const decidePrice = () => {
        let price = Math.floor(Math.random() * 101);

        if (price == 0) {
            price = Math.floor(Math.random() * 101);
        }
        return price;
    }

    console.log(books);

    // Styled Button
    const StyledButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#f50057',
        color: 'white',
        '&:hover': {
            backgroundColor: '#c51162',
        },
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px', // Add top margin for spacing
        width: '100%', // Make button stretch to fit the container
    }));

    return (
        <Box sx={{ textAlign: 'center', margin: '20px' }}>
            {load === 'Loading' && (
                <Grid container spacing={4} justifyContent="center" marginTop={2}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Box
                                sx={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '16px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    textAlign: 'center',
                                    backgroundColor: '#f9f9f9',
                                }}
                            >
                                <Skeleton variant="rectangular" width="100%" height={200} sx={{ marginBottom: '10px' }} />
                                <Skeleton variant="text" width="80%" sx={{ marginBottom: '10px' }} />
                                <Skeleton variant="text" width="60%" sx={{ marginBottom: '10px' }} />
                                <Skeleton variant="text" width="70%" sx={{ marginBottom: '10px' }} />
                                <Skeleton variant="text" width="50%" sx={{ marginBottom: '10px' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    <Skeleton variant="rectangular" width="60%" height={36} sx={{ borderRadius: '4px' }} />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}

            {load === 'Succeeded' && (
                <div>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Latest Released Books
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" marginTop={2}>
                        {books.map((book, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <Box
                                    sx={{
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        height: '100%',
                                        minHeight: '450px',
                                        padding: '16px',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                        textAlign: 'center',
                                        backgroundColor: '#f9f9f9',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <img
                                        src={book.volumeInfo.imageLinks.smallThumbnail}
                                        alt={book.volumeInfo.title}
                                        height={200}
                                        style={{ marginBottom: '10px', borderRadius: '4px' }}
                                    />
                                    <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: '600', color: '#333' }}>
                                        {book.volumeInfo.title}
                                    </Typography>
                                    <Typography sx={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
                                        {book.volumeInfo.publisher}
                                    </Typography>
                                    <Typography sx={{ marginBottom: '10px', fontWeight: '700', color: '#444', fontSize: '14px' }}>
                                        {book.volumeInfo.authors}
                                    </Typography>
                                    <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: '700', color: '#222' }}>
                                        {`${decidePrice()}$`}
                                    </Typography>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <StyledButton variant="contained" startIcon={<AddShoppingCartIcon />}>
                                            Add To Cart
                                        </StyledButton>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}

            {load === 'Failed' && (
                <Typography color="error">{error}</Typography>
            )}
        </Box>
    );
}

export default LatestBooks;
