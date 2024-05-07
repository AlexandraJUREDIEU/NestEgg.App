import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "", isAuth: true });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ name: "Username from token", isAuth: true });
        }
    }, []);

    const loginAuth = async ({ emailUser, password }) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/login', { emailUser: emailUser, password: password });
            localStorage.setItem('token', JSON.stringify(response.data.token));
            setUser({ name: emailUser, isAuth: true });
            return response;
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
