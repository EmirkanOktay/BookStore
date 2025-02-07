import { useCart } from "../Redux/CartSlicer";
import { decidePrice } from "./LatestBooks";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + decidePrice() * item.quantity, 0);
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f4f9', overflow: 'hidden' }}>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {cart.length > 0 ? (
                    <>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                            gap: '20px',
                            justifyContent: 'center',
                        }}>
                            {cart.map((item, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                                    padding: '15px',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    maxHeight: '500px',
                                    height: 'auto',
                                    marginRight: '40px'
                                }}>
                                    <img
                                        src={item.volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/200'}
                                        alt={item.volumeInfo.title}
                                        style={{
                                            width: '150px',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                            marginBottom: '10px',
                                            transition: 'transform 0.3s',
                                        }}
                                    />
                                    <div style={{ marginTop: '10px' }}>
                                        <h3 style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            color: '#333',
                                            marginBottom: '8px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {item.volumeInfo.title}
                                        </h3>
                                        <p style={{ fontSize: '12px', color: '#555', marginBottom: '5px' }}>
                                            {item.volumeInfo.publisher}
                                        </p>
                                        <p style={{ fontSize: '12px', color: '#555', marginBottom: '5px' }}>
                                            {item.volumeInfo.authors?.join(", ")}
                                        </p>
                                        <p style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                            marginBottom: '10px',
                                        }}>
                                            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>
                                                {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </p>
                                        <button onClick={() => removeFromCart(item.id)} style={{
                                            backgroundColor: '#ff4d4d',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 15px',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            transition: 'background-color 0.3s',
                                            width: '100%',
                                            marginTop: '10px',
                                        }}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{
                            marginTop: '20px',
                            textAlign: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#333',
                            padding: '15px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                            marginRight: '40px'
                        }}>
                            Total Price: <span style={{ color: '#ff4d4d' }}>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            border: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: 'background-color 0.3s',
                            width: '80%',
                            marginTop: '10px',
                            marginLeft: '6px'

                        }} onClick={() => navigate('/pay')}>
                            Payment
                        </button>
                    </>
                ) : (
                    <p style={{
                        textAlign: 'center',
                        fontSize: '18px',
                        color: '#777',
                        marginTop: '50px',
                    }}>No items in the cart.</p>
                )}
            </div>
        </div>
    );
}

export default Cart;