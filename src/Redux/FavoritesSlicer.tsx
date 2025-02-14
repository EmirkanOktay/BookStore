import { createContext, ReactNode, useContext, useState } from "react";
import { userMemberStatus } from "./UserStatusSlicer";
import { toast } from "react-toastify";

export interface productType {
    id: string;
    volumeInfo: {
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
        };
        publisher: string;
        title: string;
    };
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

        const isAlreadyFavorite = favorites.some((favorite) => favorite.volumeInfo.title === item.volumeInfo.title);

        if (!isAlreadyFavorite) {
            setFavorites((prevFavorites) => [...prevFavorites, item]);
            setFavoritesCount((prevCount) => prevCount + 1);
            toast.success("Added to favorites!");
        } else {
            toast.error("This product is already in your favorites");
        }
    };


    const removeFromFavorites = (name: string) => {
        setFavorites((prev) => prev.filter((item) => item.volumeInfo.title !== name));
        setFavoritesCount(favoritesCount - 1);
        try {
            toast.success("Removed from favorites!");
        } catch (error: any) {
            toast.error(error.message);
        }
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
