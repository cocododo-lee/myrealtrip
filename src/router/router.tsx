import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Root from "../layout/Root";
import webPath from "../constants/path"; 
import Depth1 from "../components/Depth1";
import Menu1 from "../components/Menu1";
import Home from "../components/Home";

const routes:RouteObject[] = [
    {
        path:'/',
        element:<Root/>,
        children : [
            {
                path:'/',
                element:<Navigate to={webPath.home()} replace/>,
            },
            {
                path: webPath.home(), 
                element: <Home />,    
            },
            {
                path:webPath.menu1(),
                element:<Menu1/>,
            },{
                path:webPath.depth1(),
                element : <Depth1/>,
            },
        ],
    }, {
        path:'*',
        element:<div><h1>!Error!</h1>Not Found page!</div>,
    },
];

const router = createBrowserRouter(routes);

export default router