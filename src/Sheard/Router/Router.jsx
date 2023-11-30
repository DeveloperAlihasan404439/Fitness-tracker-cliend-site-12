import { createBrowserRouter } from "react-router-dom";
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
import ClassDetels from "../../pages/Class/ClassDetels";
import Community from "../../pages/Community/Community";
import ProfileMember from "../../pages/dashboard/Member/ProfileMember";
import ProfileMemberEdit from "../../pages/dashboard/Member/ProfileMemberEdit";
import Payment from "../../Payment/Payment";
import ActivityLog from "../../pages/dashboard/Member/ActivityLog";
import ManageSlots from "../../pages/dashboard/Trainer/ManageSlots";
import RecommendedClass from "../../pages/dashboard/Member/RecommendedClass";
import ManageMember from "../../pages/dashboard/Trainer/ManageMember";
import Error from "../Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
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
                loader: ({params})=>fetch(`http://localhost:5000/tarinerApply/${params.id}`)
            },
            {
                path: '/community',
                element: <Community/>,
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
                path: '/classAll/:id',
                element: <ClassDetels/>
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
        errorElement: <Error/>,
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
                path: '/dashboard/manageslots',
                element: <ManageSlots/>
            },
            {
                path: '/dashboard/allMember',
                element: <ManageMember/>
            },
            {
                path: '/dashboard/addNowClass',
                element: <AddNewClass/>
            },
            
            // -----------------------------Trainer Dashboard End----------------------
            // -----------------------------membur Dashboard End----------------------
            {
                path: '/dashboard/userHome',
                element: <ActivityLog/>
            },
            {
                path: '/dashboard/profile',
                element: <ProfileMember/>
            },
            {
                path: '/dashboard/profileEdit',
                element: <ProfileMemberEdit/>
            },
            {
                path: '/dashboard/recommended/class',
                element: <RecommendedClass/>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
            },
            // -----------------------------membur Dashboard End----------------------
        ]
    }
])