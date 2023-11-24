import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase";
// import useAxiosPublick from "../Hooks/useAxiosPublick";
const auth = getAuth(app)

export const authProvider = createContext(null)
const AuthContext = ({children}) => {
    // const axiosPublick = useAxiosPublick()
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) =>{
        setLoader(true)
        return  signInWithEmailAndPassword(auth, email, password)
    }

    const loginGoogle = provider=>{
        setLoader(true)
       return signInWithPopup(auth, provider)

    }
    const logout = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth, crrent =>{
            const userCrrent = crrent?.email || user?.email;
            const email = {email: userCrrent}
            setUser(crrent)
            /* if(userCrrent){
                axiosPublick.post(`/jwt`, email, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                    setLoader(false)
                })
            }
            else{
                axiosPublick.post(`/logout`,email, {withCredentials: true})
                .then(res =>{
                    console.log(res.data,);
                })
            } */
            setLoader(false)
        })
        return ()=>{
            unSubscrib()
        }
    },[ user])
    const authinfo = {
        user,
        createUser,
        LoginUser,
        loginGoogle,
        logout,
        loader
    }
    return (
        <authProvider.Provider value={authinfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;