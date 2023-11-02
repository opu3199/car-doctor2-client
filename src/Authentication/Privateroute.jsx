import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-ball loading-lg"></span>

    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default Privateroute;