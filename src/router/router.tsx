import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Root from "../layout/Root";
import webPath from "../constants/path"; 
import MainLayout from "../layout/MainLayout";

const routes:RouteObject[] = [
    {
        path:'/',
        element:<Root/>,
        children : [
            {
                path:'/',
                element:<MainLayout/>
                // element:<Navigate to={webPath.home()} replace/>,
            },
        ],
    }, {
        path:'*',
        element:<div><h1>!Error!</h1>Not Found page!</div>,
    },
];

const router = createBrowserRouter(routes);

export default router