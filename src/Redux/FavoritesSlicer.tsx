import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { userMemberStatus } from "./UserStatusSlicer";
import { toast } from "react-toastify";

export interface productType {
    name: string;
    author: string;
    img: string;
    price: number;
}

interface FavoritesContextType {
    favorites: productType[];
    addToFavorites: (item: productType) => void;
    removeFromFavorites: (name: string) => void;
    countProductsFavorite: (products: productType[]) => number;
    memberStatus: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<productType[]>([]);
    const [favoritesCount, setFavoritesCount] = useState<number>(0);
    const { memberStatus } = userMemberStatus();

    const addToFavorites = (item: productType) => {
        if (!memberStatus) {
            toast.error("You must be a member to use this feature");
            return;
        }

        setFavorites((prev) => [...prev, item]);
        setFavoritesCount(favoritesCount + 1);
    };

    const removeFromFavorites = (name: string) => {
        setFavorites((prev) => prev.filter((item) => item.name !== name));
        setFavoritesCount(favoritesCount - 1);
    };

    const countProductsFavorite = (products: productType[]) => {
        return products.length;
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, countProductsFavorite, memberStatus }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};
