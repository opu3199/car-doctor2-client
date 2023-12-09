import { useEffect, useState } from "react";

const Useservices = () => {
    const[service,setservice]=useState([])

    useEffect(()=>{
        fetch('https://car-doctor2-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setservice(data))
    },[])
    return service
};

export default Useservices;