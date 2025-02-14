import { createContext, ReactNode, useContext, useState } from "react";
import { productType } from "./FavoritesSlicer";
import { toast } from "react-toastify";
import { decidePrice } from "../Compenents/LatestBooks";

interface CartItem extends productType {
    quantity: number;
}

interface cartContexType {
    cart: CartItem[];
    addToCart: (item: productType) => void;
    removeFromCart: (id: string) => void;
    didBuy: (choice: boolean) => void;
    countProductsCart: () => number;
}

const CartContext = createContext<cartContexType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: productType) => {
        setCart((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }

            return [...prev, { ...item, quantity: 1, price: decidePrice() }];
        });

        toast.success("Added to cart!");
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => {
            const existingItem = prev.find(cartItem => cartItem.id === id);

            if (existingItem && existingItem.quantity > 1) {
                return prev.map(cartItem =>
                    cartItem.id === id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prev.filter(cartItem => cartItem.id !== id);
            }
        });
    };

    const didBuy = (choice: boolean) => {
        if (choice) {
            try {
                toast.success("Thank you for your purchase!");
                setCart([]);
            } catch (error) {
                toast.error("Error: " + error);
            }
        }
    };

    const countProductsCart = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, didBuy, countProductsCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};