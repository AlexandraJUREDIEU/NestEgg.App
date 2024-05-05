import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './assets/GlobalStyle.jsx'
import Router from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
