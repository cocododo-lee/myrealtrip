import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../components/Home";
import Menu1 from "../components/Menu1";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../components/MainLayout";
import Depth1 from "../components/Depth1";
const routes:RouteObject[] = [
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children : [
            {
                path:'dpeth1',
                index:true,
                element:<Depth1/>,
            },
        {
            path:'home',
            element:<Home/>,
        },{
            path:'menu1',
            element : <Menu1 />,
        },
        ]
    },
    // {
    //     path:'*',
    //     element:<ErrorPage/>,
    // },
];

const router = createBrowserRouter(routes);

export default router