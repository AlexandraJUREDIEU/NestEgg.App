import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyle.jsx'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error404 from './pages/Error404.jsx'
import Header from './components/Header.jsx'
import MyAccount from './pages/MyAccount.jsx'
import AddTransaction from "./pages/AddTransaction.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Contact from './pages/Contact.jsx'
import Summary from './pages/Summary.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/account",
        element: <MyAccount />,
      },
      {
        path: "/addTransaction",
        element: <AddTransaction />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ]
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
