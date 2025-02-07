import { Button } from "@mui/material";
import Footer from "../Compenents/Footer";
import HeaderNav from "../Compenents/HeaderNav";
import Navbar from "../Compenents/Navbar";
import ScrollToTop from "../Compenents/ScrollToTop";
import UserProfile from "../Compenents/UserProfile";
import { useCart } from "../Redux/CartSlicer"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function UserPayment() {
    const { addToCart, removeFromCart, didBuy, cart } = useCart();

    // totalPrice hesaplanıyor
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
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
                                src={item.volumeInfo.imageLinks?.smallThumbnail}
                                alt={item.volumeInfo.title}
                                style={{
                                    width: '150px',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    cursor: 'pointer'
                                }}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.volumeInfo.title}</h3>
                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.volumeInfo.publisher}</p>
                                <p style={{ fontSize: '14px', color: '#555' }}>
                                    {item.volumeInfo.authors?.join(", ")}
                                </p>
                                <p style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    color: '#000',
                                    marginBottom: '10px',
                                }}>
                                    {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <Button onClick={() => { removeFromCart(item.title) }} sx={{
                                    color: 'white',
                                    backgroundColor: '#d32f2f',
                                    marginTop: '10px',
                                    '&:hover': { backgroundColor: '#b71c1c' },
                                    borderRadius: '8px',
                                    padding: '8px 16px'
                                }}>
                                    <DeleteRoundedIcon />
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>No product added to cart yet.</p>
                )}
            </div>
            <div>
                {cart.length > 0 && (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button
                            onClick={() => { didBuy(cart) }}
                            sx={{
                                color: 'white',
                                backgroundColor: 'green',
                                marginTop: '10px',
                                '&:hover': {
                                    backgroundColor: '#1f7a1f',
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
                                },
                                transition: 'all 0.3s ease',
                                borderRadius: '8px',
                                padding: '12px 20px',
                                width: '50%',
                                marginBottom: '15px'
                            }}
                        >
                            Buy All &nbsp;
                            <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>
                                ${totalPrice.toFixed(2)}
                            </span>
                            <ShoppingCartIcon sx={{ marginLeft: '10px' }} />
                        </Button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default UserPayment;
