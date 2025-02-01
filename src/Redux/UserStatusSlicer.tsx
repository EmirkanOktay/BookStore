import React, { createContext, useState, useContext, ReactNode } from 'react';

// State'i ve fonksiyonları tanımlayalım
interface MemberContextType {
    memberStatus: boolean;
    setMemberStatus: (status: boolean) => void;
}

// children tipini ReactNode olarak belirtiyoruz
interface MemberProviderProps {
    children: ReactNode;
}

const MemberContext = createContext<MemberContextType | undefined>(undefined);

export const MemberProvider: React.FC<MemberProviderProps> = ({ children }) => {
    const [memberStatus, setMemberStatus] = useState(false);

    return (
        <MemberContext.Provider value={{ memberStatus, setMemberStatus }}>
            {children}
        </MemberContext.Provider>
    );
};

export const useMemberStatus = () => {
    const context = useContext(MemberContext);
    if (!context) {
        throw new Error("useMemberStatus must be used within a MemberProvider");
    }
    return context;
};
