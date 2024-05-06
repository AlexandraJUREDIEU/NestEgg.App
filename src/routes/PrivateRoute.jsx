import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthWrapper';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    return user.isAuth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
