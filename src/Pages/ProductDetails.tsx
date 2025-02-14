import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../Compenents/Navbar';
import HeaderNav from '../Compenents/HeaderNav';
import Footer from '../Compenents/Footer';
import ScrollToTop from '../Compenents/ScrollToTop';
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import { decidePrice, StyledButton } from '../Compenents/LatestBooks';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorites } from '../Redux/FavoritesSlicer'
import { useCart } from '../Redux/CartSlicer';

function ProductDetails() {
    const { addToFavorites } = useFavorites();
    const { addToCart } = useCart();

    const stripHtml = (input: string) => {
        const doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.body.textContent || "";
    };
    const { query } = useParams();
    const [book, setBook] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (query) {
            fetch(`https://www.googleapis.com/books/v1/volumes/${query}`)
                .then(response => response.json())
                .then(data => {
                    setBook(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching book details:', err);
                    setError('Error fetching book details: ' + err.message);
                    setLoading(false);
                });
        }
    }, [query]);

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
                        <Grid container spacing={4} justifyContent="left" marginTop={2}>
                            {Array.from({ length: 1 }).map((_, index) => (
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
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Navbar />
            <HeaderNav />
            <ScrollToTop />
            <Box>
                <Container>
                    {book ? (
                        <>
                            <Grid container alignItems="center">
                                <Grid item xs={12} md={6}>
                                    <img
                                        src={book.volumeInfo?.imageLinks?.smallThumbnail || 'https://via.placeholder.com/200'}
                                        alt={book.volumeInfo?.title}
                                        height={300}
                                        style={{ marginBottom: '10px', borderRadius: '4px', marginLeft: '50px', marginTop: '30px' }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: '10px' }}>
                                        {book.volumeInfo?.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                        {book.volumeInfo?.authors?.join(", ")}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: '10px', marginRight: '50px' }}>
                                        {stripHtml(book.volumeInfo?.description || "No description available.")}
                                    </Typography>

                                    <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: '700', color: '#222' }}>
                                        {`${decidePrice()}$`}
                                    </Typography>
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <StyledButton style={{ marginRight: '50px' }} variant="contained" startIcon={<AddShoppingCartIcon />}
                                                onClick={() => addToCart(book)}>
                                                Add To Cart
                                            </StyledButton>
                                            <div onClick={() => addToFavorites(book)}>
                                                <StyledButton variant="contained" startIcon={<FavoriteIcon />}>
                                                    Add To Wishlist
                                                </StyledButton>
                                            </div>
                                        </div>

                                    </div>
                                </Grid>
                            </Grid>

                            <Box sx={{ marginTop: '30px', marginBottom: '40px' }}>
                                <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '10px' }}>Book Details</Typography>
                                <Typography sx={{ marginBottom: '5px' }} variant="body2"><strong>Author:</strong> {book.volumeInfo?.authors?.join(",") || "Not Available"}</Typography>
                                <Typography sx={{ marginBottom: '5px' }} variant="body2"><strong>Publisher:</strong> {book.volumeInfo?.publisher || "Not Available"}</Typography>
                                <Typography sx={{ marginBottom: '5px' }} variant="body2"><strong>Language:</strong> {book.volumeInfo?.language || "Not Available"}</Typography>
                                <Typography sx={{ marginBottom: '5px' }} variant="body2"><strong>Page Count:</strong> {book.volumeInfo?.pageCount || "Not Available"}</Typography>
                                <Typography sx={{ marginBottom: '5px' }} variant="body2"><strong>Categories:</strong> {book.volumeInfo?.categories?.join(", ") || "Not Available"}</Typography>
                            </Box>
                        </>
                    ) : (
                        <Typography variant="body1">Book not found</Typography>
                    )}
                </Container>
            </Box>
            <Footer />
        </div>
    );
}

export default ProductDetails;