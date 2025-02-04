import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MemberContextType {
    memberStatus: boolean;
    setMemberStatus: (status: boolean) => void;
    balance: number;
}

interface MemberProviderProps {
    children: ReactNode;
}

const MemberContext = createContext<MemberContextType | undefined>(undefined);

export const MemberProvider: React.FC<MemberProviderProps> = ({ children }) => {
    const [memberStatus, setMemberStatus] = useState(false);

    return (
        <MemberContext.Provider value={{ memberStatus, setMemberStatus, balance: 1000 }}>
            {children}
        </MemberContext.Provider>
    );
};

export const userMemberStatus = () => {
    const context = useContext(MemberContext);
    if (!context) {
        throw new Error("useMemberStatus must be used within a MemberProvider");
    }
    return context;
};
