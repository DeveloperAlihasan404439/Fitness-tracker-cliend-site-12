import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const PriveatRout = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()
    if(user){
        return children
    }
    if(loader){
        return <div className="w-full h-screen flex justify-center items-center">
        <span className="loading w-[500px] loading-infinity bg-gradient-to-r from-[#f7be02] to-[#f81808]"></span>
        </div>

    }
    return <Navigate state={location.pathname} to='/login'/>;
};
export default PriveatRout;