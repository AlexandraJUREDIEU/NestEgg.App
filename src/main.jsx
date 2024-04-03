import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GlobalStyle from './assets/GlobalStyle.jsx'
import App from './App.jsx'
import Error from './Error.jsx'
import Dashboard from './Dashboard.jsx'
import MyAccount from './MyAccount.jsx'
import Summary from './Summary.jsx'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'
import Pricing from './pages/Pricing.jsx'



// Router
const router = createBrowserRouter([ 
      {path:"/", element: <App/>, errorElement:<Error/>, children: [
           {path:"/login", element: <Login/>},
           {path:"/signin", element: <SignIn/>},
          ]},
      {path:"/price", element: <App/>},
      {path:"/dashboard", element:<Dashboard/>, errorElement:<Error/>},
      {path:"/my-account", element:<MyAccount/>, errorElement:<Error/>},
      {path:"/summary", element:<Summary/>, errorElement:<Error/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
