import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Roots from "../Pages/Roots";
import Login from "../Pages/Login";

export const router= createBrowserRouter([
    {
        path:'/',
        Component: Roots,
        children:[
            {
               index: true, 
               Component: Home
            },{
                path: "/login",
                Component: Login
            }
        ]
    }
])