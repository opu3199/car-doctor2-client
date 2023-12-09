/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase";
import axios from "axios";

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
        const useremail=user?.email || user
        const loggedemail={email:useremail}
            setuser(user)
            setloading(false)
            //if user exist we should token
            if(user){
             
              axios.post('https://car-doctor2-server.vercel.app/jwt',loggedemail,{withCredentials:true})
              .then(res=>{
                console.log('token response',res.data)
              })

            }else{
              axios.post('https://car-doctor2-server.vercel.app/logout',
              loggedemail,{withCredentials:true})
              .then(res=>{
                console.log('token response',res.data)
              })

            }
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