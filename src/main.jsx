import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './MainLayout/Root.jsx';
import Home from './MainLayout/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Authprovider from './Authentication/Authprovider';
import Cheakout from './Pages/Cheakout';
import Bookings from './Pages/Bookings';
import Privateroute from './Authentication/Privateroute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/checkout/:id',
        element: <Privateroute><Cheakout></Cheakout></Privateroute>,
        loader:({params})=>fetch(`https://car-doctor2-server.vercel.app/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<Privateroute><Bookings></Bookings></Privateroute> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  </React.StrictMode>,
)
