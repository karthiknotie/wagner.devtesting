import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Pages/User/Home";
import UserLayout from "../UserLayout/UserLayout";
import About from '../Pages/User/About'

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <UserLayout />, // UserLayout as the root layout
            children: [
                {
                    path: "/",  // This is for the home route that will be rendered inside Outlet in UserLayout
                    element: <Home />,
                },
                {
                    path: "/about",  // This is for the home route that will be rendered inside Outlet in UserLayout
                    element: <About />,
                },
            ],
        },
    ]);

    return routes;
};

export default Routes;
