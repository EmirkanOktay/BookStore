import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
import { useEffect } from "react";
import { get1984, getWarAndPeace, getHarryPotter, getCrimeandPunishment } from '../Redux/TopSellBooksSlicer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Skeleton from '@mui/material/Skeleton';
import { decidePrice } from "./LatestBooks";
import { StyledButton } from "./LatestBooks";
import { useNavigate } from "react-router-dom";


function TopSeller() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { load, error, books1984, booksWarAndPeace, booksHarryPotter, booksCrimeAndPunishment } = useSelector((state: RootState) => state.topSellBook);

    useEffect(() => {
        dispatch(get1984());
        dispatch(getWarAndPeace());
        dispatch(getHarryPotter());
        dispatch(getCrimeandPunishment());
    }, [dispatch]);


    let topSellerBooksArray: any = [];

    books1984.forEach((book) => {
        topSellerBooksArray.push(book);
    })
    booksCrimeAndPunishment.forEach((book) => {
        topSellerBooksArray.push(book);
    })
    booksHarryPotter.forEach((book) => {
        topSellerBooksArray.push(book);
    })
    booksWarAndPeace.forEach((book) => {
        topSellerBooksArray.push(book);
    })


    return (
        <Box sx={{ textAlign: 'center', marginTop: '70px' }}>
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
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'center',
                            letterSpacing: '1px',
                            mb: 3
                        }}
                    >
                        <p
                            style={{
                                width: '60%',
                                border: '3px solid #FF6347',
                                borderRadius: '12px',
                                fontWeight: '300',
                                padding: '10px 20px',
                                textAlign: 'center',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                fontSize: '2rem',
                                margin: '0 auto'
                            }}
                        >
                            Best Selling Books
                        </p>
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" marginTop={2}>
                        {topSellerBooksArray.map((book: any, index: number) => (
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
                                        style={{ marginBottom: '10px', borderRadius: '4px', cursor: 'pointer' }}
                                        onClick={() => { navigate(`/product/${book.id}`); }}
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

export default TopSeller;
