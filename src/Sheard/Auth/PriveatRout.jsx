import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Loading/Loading";
const PriveatRout = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()
    if(user){
        return children
    }
    if(loader){
        return <Loading/>

    }
    return <Navigate state={location.pathname} to='/login'/>;
};
export default PriveatRout;