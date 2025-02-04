import Footer from "../Compenents/Footer"
import HeaderNav from "../Compenents/HeaderNav"
import Navbar from "../Compenents/Navbar"
import ScrollToTop from "../Compenents/ScrollToTop"
import { useFavorites } from "../Redux/FavoritesSlicer"
import { useCart } from "../Redux/CartSlicer"
import UserProfile from "../Compenents/UserProfile"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function UserFavorites() {

    const { favorites, removeFromFavorites } = useFavorites();
    const { addToCart } = useCart();

    return (
        <div>
            <Navbar />
            <HeaderNav />
            <ScrollToTop />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    marginBottom: '20px'
                }}>
                    <UserProfile />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    {favorites.length > 0 ? (
                        favorites.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '10px',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                <img
                                    src={item.imageLinks?.thumbnail}
                                    alt={item.title}
                                    style={{
                                        width: '150px',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        marginBottom: '15px'
                                    }}
                                />
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#555' }}>By: {item.authors.join(', ')}</p>
                                    <p style={{ fontSize: '16px', color: '#000' }}>${item.price}</p>
                                    <Button onClick={() => { removeFromFavorites(item.title) }} sx={{
                                        color: 'white',
                                        backgroundColor: '#d32f2f',
                                        marginTop: '10px',
                                        '&:hover': { backgroundColor: '#b71c1c' },
                                        borderRadius: '8px',
                                        padding: '8px 16px'
                                    }}>
                                        <DeleteRoundedIcon />
                                    </Button>
                                    <div>
                                        <Button onClick={() => { addToCart(item) }} sx={{
                                            color: 'white',
                                            backgroundColor: 'green',
                                            marginTop: '10px',
                                            '&:hover': { backgroundColor: '#1f7a1f' },
                                            borderRadius: '8px',
                                            padding: '8px 16px'
                                        }}>
                                            Add To Cart
                                            <ShoppingCartIcon sx={{ marginLeft: '10px' }} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center' }}>No favorites added yet.</p>
                    )}
                </div>
            </div>

            <Footer />
        </div >
    );
}



export default UserFavorites