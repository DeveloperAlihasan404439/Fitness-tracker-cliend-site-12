import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase";
import useAxios from "../Hooks/useAxios";
const auth = getAuth(app)

export const authProvider = createContext(null)

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const axiosSecure = useAxios()
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
            setUser(crrent)
            setLoader(false)
        })
        return ()=>{
            unSubscrib()
        }
    },[ user,axiosSecure])
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