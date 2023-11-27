import {createBrowserRouter} from "react-router-dom"; 
import MainLayout from "../../pages/Layout/MainLayout";
import SignUp from "../../pages/Authotication/SignUp";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Authotication/LogIn";
import Gallery from "../../pages/Gallery/Gallery";
import Dashboard from "../../pages/Layout/Dashboard/Dashboard";
import AllSubscribers from "../../pages/dashboard/Admin/AllSubscribers";
import Trainer from "../../Companent/Trainer";
import TrainerApply from "../../Companent/TrainerApply";
import AppliedTrainer from "../../pages/dashboard/Admin/AppliedTrainer";
import Users from "../../pages/dashboard/Admin/Users";
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
                path: '/tariner',
                element: <Trainer/>
            },
            {
                path: '/tarinerApply',
                element: <TrainerApply/>
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
            {
                path: '/dashboard/appliedTrainer',
                element: <AppliedTrainer/>,
                loader: ()=> fetch('http://localhost:5000/tariners')
            },
            {
                path: '/dashboard/allusers',
                element: <Users/>
            },
            // -----------------------------Admin Dashboard End----------------------
        ]
    }
])