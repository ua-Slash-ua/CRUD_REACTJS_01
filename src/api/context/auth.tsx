// src/context/AuthContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthContextType {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
