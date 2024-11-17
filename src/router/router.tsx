import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Root from "../layout/Root";
import webPath from "../constants/path"; 
import MainLayout from "../layout/MainLayout";
import Main from "../pages/Main";
import Sub1 from "../pages/Sub1";
import Hotel from "../pages/Hotel";
import Mypack from "../pages/Mypack";
import Search from "../pages/SearchResult";

const routes:RouteObject[] = [
    {
        path:'/',
        element:<Root/>,
        children : [
            {
                path:'/',
                element:<MainLayout/>,
                // element:<Navigate to={webPath.home()} replace/>,
                children : [
                    {
                        path:'/',
                        element:<Main/>
                    },{
                        path:'/sub1',
                        element:<Sub1/>
                    },{
                        path:'/mypack',
                        element:<Mypack/>
                    },{
                        path:'/hotel',
                        element:<Hotel/>
                    },{
                        path:'/search',
                        element:<Search/>
                    },
                ]
            },
        ],
    }, {
        path:'*',
        element:<div><h1>!Error!</h1>Not Found page!</div>,
    },
];

const router = createBrowserRouter(routes);

export default router