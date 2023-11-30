import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Sheard/Hooks/useAuth";
import useAdmin from "../../../Sheard/Hooks/useAdmin";
import Loading from "../../../Sheard/Loading/Loading";

const AdminRout = ({children}) => {
    const {user,loader} = useAuth()
    const {isAdmin, isLoading} = useAdmin()
    const location = useLocation()
    if(loader || isLoading){
        return <Loading/>

    }
    if(user && isAdmin){
       return children
    }
    return <Navigate state={location.pathname} to='/login'/>;
};

export default AdminRout;