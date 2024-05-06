import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.jsx';
import Error from '../Error.jsx';
import Dashboard from '../Dashboard.jsx';
import MyAccount from '../MyAccount.jsx';
import Summary from '../Summary.jsx';
import Login from '../pages/Login.jsx';
import SignIn from '../pages/SignIn.jsx';
import Income from '../pages/Income.jsx';
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
            { path: "income", element: <Income /> },
        ]
    },
    { path: "summary", element: <PrivateRoute><Summary /></PrivateRoute> },
    { path: "*", element: <Error /> }
]);

export default router;
