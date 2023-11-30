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
import ActivityLog from "../../pages/dashboard/Member/ActivityLog";
import ManageSlots from "../../pages/dashboard/Trainer/ManageSlots";
import RecommendedClass from "../../pages/dashboard/Member/RecommendedClass";
import ManageMember from "../../pages/dashboard/Trainer/ManageMember";
import Error from "../Error";
import PaymentHistore from "../../pages/dashboard/Member/PaymentHistore";
import Balance from "../../pages/dashboard/Admin/Balance";
import PriveatRout from "../Auth/PriveatRout";
import AdminRout from "../../pages/dashboard/Admin/AdminRout";
import TrainerRouter from "../../pages/dashboard/Trainer/TrainerRouter";

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
                element: <PriveatRout><TrainerApply/></PriveatRout>
            },
            {
                path: '/tarinerApply/:id',
                element: <PriveatRout><SingleTrainer/></PriveatRout>,
                loader: ({params})=>fetch(`https://body-pulse.vercel.app/tarinerApply/${params.id}`)
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
        // errorElement: <Error/>,
        children: [
            // -----------------------------Admin Dashboard Start--------------------
            {
                path: '/dashboard/subscribers',
                element: <AdminRout><AllSubscribers/></AdminRout>,
            },
            {
                path: "/dashboard/allTrainers",
                element: <AdminRout><TrainerAll/></AdminRout>,
            },
            {
                path: '/dashboard/appliedTrainer',
                element: <AdminRout><AppliedTrainer/></AdminRout>,
            },
            {
                path: '/dashboard/allusers',
                element: <AppliedTrainer><Users/></AppliedTrainer>
            },
            {
                path: '/dashboard/menageBalench',
                element: <AppliedTrainer><Balance/></AppliedTrainer>
            },
            // -----------------------------Admin Dashboard End----------------------

            // -----------------------------Trainer Dashboard End----------------------
            {
                path: '/dashboard/manageslots',
                element: <TrainerRouter><ManageSlots/></TrainerRouter>
            },
            {
                path: '/dashboard/allMember',
                element: <TrainerRouter><ManageMember/></TrainerRouter>
            },
            {
                path: '/dashboard/addNowClass',
                element: <TrainerRouter><AddNewClass/></TrainerRouter>
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
                path: '/dashboard/userHome/paymentHistore',
                element: <PaymentHistore/>,
            },
            // -----------------------------membur Dashboard End----------------------
        ]
    }
])