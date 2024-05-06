import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "", isAuth: false });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ name: "Username from token", isAuth: true });
        }
    }, []);

    const loginAuth = async ({ username, password }) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/login', { emailUser, password });
            localStorage.setItem('token', JSON.stringify(response.data.token));
            setUser({ name: username, isAuth: true });
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const logout = () => {
        axios.post('http://localhost:8000/auth/logout');
        localStorage.removeItem('token');
        setUser({ name: "", isAuth: false });
    };

    return (
        <AuthContext.Provider value={{ user, loginAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
