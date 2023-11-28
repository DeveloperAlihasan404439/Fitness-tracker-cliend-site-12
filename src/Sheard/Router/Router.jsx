import {createBrowserRouter} from "react-router-dom"; 
import MainLayout from "../../pages/Layout/MainLayout";
import SignUp from "../../pages/Authotication/SignUp";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Authotication/LogIn";
import Gallery from "../../pages/Gallery/Gallery";
import Dashboard from "../../pages/Layout/Dashboard/Dashboard";
import AllSubscribers from "../../pages/dashboard/Admin/AllSubscribers";
import TrainerApply from "../../Companent/TrainerApply";
import AppliedTrainer from "../../pages/dashboard/Admin/AppliedTrainer";
import Users from "../../pages/dashboard/Admin/Users";
import Trainer from "../../pages/dashboard/Trainer/Trainer";
import SingleTrainer from "../../pages/dashboard/Trainer/SingleTrainer";
import TrainerAll from "../../pages/dashboard/Admin/TrainerAll";
import ClassAll from "../../pages/Class/ClassAll";
import AddNewClass from "../../pages/dashboard/Trainer/AddNewClass";
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
                path: '/tarinerApply/:id',
                element: <SingleTrainer/>,
                loader: ({params})=> fetch(`http://localhost:5000/confrimTariners/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/classAll',
                element: <ClassAll/>
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
                path: "/dashboard/allTrainers",
                element: <TrainerAll/>,
            },
            {
                path: '/dashboard/appliedTrainer',
                element: <AppliedTrainer/>,
            },
            {
                path: '/dashboard/allusers',
                element: <Users/>
            },
            // -----------------------------Admin Dashboard End----------------------

            // -----------------------------Trainer Dashboard End----------------------
            {
                path: '/dashboard/addNowClass',
                element: <AddNewClass/>
            },
            // -----------------------------Trainer Dashboard End----------------------
        ]
    }
])