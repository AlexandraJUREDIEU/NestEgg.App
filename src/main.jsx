// Import 
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyle.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Error404 from './pages/Error404.jsx'
import MyAccount from './pages/Profile/MyAccount.jsx'
import AddTransaction from "./pages/Dashboard/AddTransaction.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Contact from './pages/Contact.jsx'
import Summary from './pages/Summary/Summary.jsx'
import Profile from './pages/Profile/Profile.jsx'
import FixedCharges from './pages/Profile/FixedCharges.jsx'
import Settings from './pages/Profile/Settings.jsx'
import Income from './pages/Profile/Income.jsx'
import Stats from './pages/Summary/Stats.jsx'
import Incoming from './pages/Summary/Incoming.jsx'
import Saving from './pages/Summary/Saving.jsx'
import Transactions from './pages/Summary/Transactions.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,

  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    // errorElement: <Error404 />,
    children: [
      {
        path: "addTransactions",
        element: <AddTransaction />,
      },]


  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "account",
        element: <MyAccount />
      },
      {
        path: "fixedCharges",
        element: <FixedCharges />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "income",
        element: <Income />
      }
    ]
  },
  {
    path: "summary",
    element: <Summary />,
    children: [
      {
        path: "stats",
        element: <Stats />
      },
      {
        path: "incoming",
        element: <Incoming />,
      },
      {
        path: "savings",
        element: <Saving />
      },
      {
        path: "transactions",
        element: <Transactions />
      }
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />

  </React.StrictMode>,
)

