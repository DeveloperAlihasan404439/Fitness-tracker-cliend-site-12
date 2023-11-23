import { useContext } from "react";
import { authProvider } from "../Auth/AuthContext";

const useAuth = () => {
   const auth = useContext(authProvider)
    return auth;
};

export default useAuth;