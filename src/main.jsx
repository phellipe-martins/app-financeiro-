import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx';
import Releases from './pages/Releases.jsx';
import Kpis from './pages/Kpis.jsx';
import Investments from './pages/Investments.jsx';

import { FinanceProvider } from './context/FinanceContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },

{
  path: "home",
  element: <Home />
},

  {
    path: "releases",
    element: <Releases />
  },

  {
    path: "kpis",
    element: <Kpis />
  },

  {
    path: "investments",
    element: <Investments />
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinanceProvider>
    <RouterProvider router={router} />
    </FinanceProvider>
  </StrictMode>,
)
