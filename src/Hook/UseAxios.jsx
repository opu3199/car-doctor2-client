import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:'https://car-doctor2-server.vercel.app',
    withCredentials:true
})
const UseAxios = () => {
    const {logout}=UseAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },error=>{
            console.log('error tracked in the interseptor',error.response)
            if(error.response.status===401||error.response.status ===403){
                console.log('log out user')
                logout()
                .then(()=>{
                    navigate('/login')
                })
                .catch(error=>console.error(error))
            }

        }) 
    },[])

    return axiosSecure 
};

export default UseAxios;