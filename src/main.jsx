import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './routes/home/Home';
import Dashboard from './routes/dashboard/Dashboard';
import Chat from './routes/chat/Chat';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/dashboard",
    children:[
      {path:"/dashboard",element: <Dashboard/>},
      {path: "/dashboard/chats/:id", element: <Chat/>},]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
