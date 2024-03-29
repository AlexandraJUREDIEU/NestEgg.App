import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GlobalStyle from './assets/GlobalStyle.jsx'
import App from './App.jsx'
import Error from './Error.jsx'
import Dashboard from './Dashboard.jsx'
import MyAccount from './MyAccount.jsx'
import Summary from './Summary.jsx'



// Router
const router = createBrowserRouter([ 
      {path:"/", element: <App/>, errorElement:<Error/>},
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
