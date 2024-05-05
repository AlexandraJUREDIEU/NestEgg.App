import App from '../App.jsx'
import Error from '../Error.jsx'
import Dashboard from '../Dashboard.jsx'
import MyAccount from '../MyAccount.jsx'
import Summary from '../Summary.jsx'
import Login from '../pages/Login.jsx'
import SignIn from '../pages/SignIn.jsx'
import Income from '../pages/Income.jsx'
import { createBrowserRouter } from 'react-router-dom'

// Router
const router = createBrowserRouter([ 
	{path:"/", element: <App/>, errorElement:<Error/>, isPrivate:false, children: [
		{path:"/login", element: <Login/>, isPrivate:false},
		{path:"/signin", element: <SignIn/>, isPrivate:false},
		]},
	{path:"/price", element: <App/>, isPrivate:false},
	{path:"/dashboard", element:<Dashboard/>, errorElement:<Error/>, isPrivate:true},
	{path:"/my-account", element:<MyAccount/>, errorElement:<Error/>, isPrivate:true, children: [
		{path:"income", element: <Income/>},
	]},
	{path:"/summary", element:<Summary/>, isPrivate:true, errorElement:<Error/>},
]);

export default router;