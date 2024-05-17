import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.jsx';
import Error from '../Error.jsx';
import Dashboard from '../Dashboard.jsx';
import MyAccount from '../MyAccount.jsx';
import Summary from '../Summary.jsx';
import Login from '../pages/Login.jsx';
import SignIn from '../pages/SignIn.jsx';
import Income from '../pages/Income.jsx';
import Profil from '../pages/myAccount/Profil.jsx';
import Compte from '../pages/myAccount/Compte.jsx';
import Ressources from '../pages/myAccount/Ressources.jsx';
import ChargesFixes from '../pages/myAccount/ChargesFixes.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const router = createBrowserRouter([
    {
        path: "/", element: <App />, errorElement: <Error />, children: [
            { path: "login", element: <Login /> },
            { path: "signin", element: <SignIn /> },
        ]
    },
    { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
    {
        path: "my-account", element: <PrivateRoute><MyAccount /></PrivateRoute>, children: [
            { path: "profil", element: <Profil /> },
            { path: "compte", element: <Compte /> },
            { path: "ressources", element: <Ressources /> },
            { path: "chargesfixes", element: <ChargesFixes /> },
        ]
    },
    { path: "summary", element: <PrivateRoute><Summary /></PrivateRoute> },
    { path: "*", element: <Error /> }
]);

export default router;
