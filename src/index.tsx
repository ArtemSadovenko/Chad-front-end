import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Authenticator from './pages/Authenticator';
import { Dashboard } from '@mui/icons-material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
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

root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
