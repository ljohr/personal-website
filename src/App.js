import './App.css';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import BlogHome from "./pages/BlogHome"
import Single from "./pages/Single"
import Register from "./pages/Register";
import Login from "./pages/Login";

const LayOut = () => {
  return (
    <>
      <header> 
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/blog",
        element:<BlogHome />
      },
      {
        path:"/blog/post/:id",
        element:<Single />
      },
    ]
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}


{/* <FontAwesomeIcon icon={ faPen } /> */}

export default App;
