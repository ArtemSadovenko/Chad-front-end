import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authenticator from './pages/Authenticator';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/login",
        element: <Authenticator/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },

  ]);
  


function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
