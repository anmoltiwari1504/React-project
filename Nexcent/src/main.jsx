import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout.jsx';
import Home from './Component/Home.jsx';
import Features from './Features.jsx';
import Community from './Component/Community.jsx';
import Blog from './Component/Blog.jsx';
import Authform from './Component/Authform.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element:<Home/>
      },  
      {
        path: "Features",
        element:<Features/>
      },
      {
        path: "Community",
        element:<Community/>
      },
      {
        path: "Blog",
        element:<Blog/>
      },
      {
        path: "Authform",
        element:<Authform/>
      },
    ]

    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
