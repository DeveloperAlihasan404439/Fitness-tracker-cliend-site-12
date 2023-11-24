import {createBrowserRouter} from "react-router-dom"; 
import MainLayout from "../../pages/Layout/MainLayout";
import SignUp from "../../pages/Authotication/SignUp";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Authotication/LogIn";
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
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
        ]
    }
])