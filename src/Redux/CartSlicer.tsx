import { createContext, ReactNode, useContext, useState } from "react";
import { productType } from "./FavoritesSlicer";

interface cartContexType {
    cart: productType[];
    addToCart: (item: productType) => void;
    removeFromCart: (name: string) => void;
    didBuy: (choice: boolean) => void;
    countProductsCart: (products: productType[]) => number;
}

const CartContext = createContext<cartContexType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<productType[]>([]);

    const addToCart = (item: productType) => {
        setCart((prev) => [...prev, item]);


    }
    const removeFromCart = (name: string) => {
        setCart((prev) => prev.filter((item) => item.name !== name));
    }
    const didBuy = (choice: boolean) => {

        if (choice) {
            setCart([]);
        }
    }
    const countProductsCart = (products: productType[]) => {
        return products.length;
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, didBuy, countProductsCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}