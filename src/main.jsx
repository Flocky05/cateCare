import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import About from './component/About/About';
import CatDetails from './component/CatDetails/CatDetails';
import CatContex from './context/CatContex';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('cat.json')
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/catDetails",
        element:<CatDetails></CatDetails>,
        loader:()=>fetch('cat.json')
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatContex>
    <RouterProvider router={router} />
    </CatContex>
  </React.StrictMode>,
)
