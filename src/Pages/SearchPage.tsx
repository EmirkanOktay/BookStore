import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Compenents/Navbar";
import HeaderNav from "../Compenents/HeaderNav";
import Footer from "../Compenents/Footer";
import ScrollToTop from "../Compenents/ScrollToTop";
import { Box, Container, Typography, Grid, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../Redux/QueryBookSlicer";
import { RootState, AppDispatch } from "../Redux/Store";
import { StyledButton } from "../Compenents/LatestBooks";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { decidePrice } from "../Compenents/LatestBooks";

const SearchPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { query } = useParams();
    const { books, loading, error } = useSelector(
        (state: RootState) => state.queryBook
    );

    useEffect(() => {
        if (query) {
            dispatch(fetchBooks(query));
        }
    }, [dispatch, query]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <HeaderNav />
                <ScrollToTop />
                <Box>
                    <Container>
                        <Typography variant="h5" sx={{ fontWeight: '600' }}>
                            Searching For "{query}"
                        </Typography>
                        <Grid container spacing={4} justifyContent="center" marginTop={2}>
                            {Array.from({ length: 6 }).map((_, index) => (
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
                                        <Skeleton variant="rectangular" width="100%" height={200} sx={{ marginBottom: 2 }} />
                                        <Skeleton variant="text" width="80%" sx={{ marginBottom: 1 }} />
                                        <Skeleton variant="text" width="60%" sx={{ marginBottom: 1 }} />
                                        <Skeleton variant="text" width="70%" sx={{ marginBottom: 2 }} />
                                        <Skeleton variant="rectangular" width="60%" height={36} sx={{ borderRadius: '4px' }} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
                <Footer />
            </div>
        );
    }

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Navbar />
            <HeaderNav />
            <ScrollToTop />
            <Box>
                <Container>
                    <Typography variant="h5" sx={{ fontWeight: '600' }}>Search Results for "{query}"</Typography>
                    <Grid container spacing={4} justifyContent="center" marginTop={2} >
                        {books.map((book: any, index: number) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
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
                                        src={book.volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/200'}
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
                                        {book.volumeInfo.authors?.join(", ")}
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
                </Container>
            </Box>
            <div style={{ marginBottom: '90px' }}></div>
            <Footer />
        </div>
    );
};

export default SearchPage;
