import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyle.jsx';
import router from './routes/Router'; // Assurez-vous que l'importation est correcte
import AuthProvider from './auth/AuthWrapper'; // Assurez-vous que le chemin est correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
);

