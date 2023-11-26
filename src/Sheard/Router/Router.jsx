import {createBrowserRouter} from "react-router-dom"; 
import MainLayout from "../../pages/Layout/MainLayout";
import SignUp from "../../pages/Authotication/SignUp";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Authotication/LogIn";
import Gallery from "../../pages/Gallery/Gallery";
import Dashboard from "../../pages/Layout/Dashboard/Dashboard";
import AllSubscribers from "../../pages/dashboard/Admin/AllSubscribers";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            // -----------------------------Admin Dashboard Start--------------------
            {
                path: '/dashboard/subscribers',
                element: <AllSubscribers/>,
            },
            // -----------------------------Admin Dashboard End----------------------
        ]
    }
])