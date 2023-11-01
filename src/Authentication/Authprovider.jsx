/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase";

export const AuthContext=createContext(null)

const auth = getAuth(app);
const Authprovider = ({children}) => {

    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    const createregister=(email,password)=>{
      setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    
    }
    const createlogin=(email,password)=>{
      setloading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout=()=>{
      setloading(true)
      return signOut(auth)
    }
    useEffect(()=>{
       return onAuthStateChanged(auth, (user)=>{
            setuser(user)
            setloading(false)
       })
    },[])




    const authentication={
        createregister,
        user,
        createlogin,
         logout,
         loading


    }
    return (
        <AuthContext.Provider value={authentication}>
        {children}

      </AuthContext.Provider>
    );
};

export default Authprovider;