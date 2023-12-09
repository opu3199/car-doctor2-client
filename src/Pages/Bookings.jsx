import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import Navbar from "../Component/Navbar";
import Bookingsshow from "./Bookingsshow";
import axios from "axios";
import UseAxios from "../Hook/UseAxios";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setbookings]=useState([])
    const axiossecure=UseAxios()
    // const url=`http://localhost:5000/bookings?email=${user?.email}`
     const url=`/bookings?email=${user?.email}`
    useEffect(()=>{

      // axios.get(url,{withCredentials:true})
      // .then(res=>{
      //   setbookings(res.data)
      // })

       axiossecure.get(url)
       .then(res=>{
        setbookings(res.data)
       })
    },[url,axiossecure])

    const handledelte=id=>{
      const proceed=confirm('are you sure to delete')
      if(proceed){
        fetch(`https://car-doctor2-server.vercel.app/bookings/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
            alert('deleted successfully')
            const remaining=bookings.filter(book=>book._id !==id)
            setbookings(remaining)
          }
        })
      }
    }

    const handleupdate=id=>{
      fetch(`https://car-doctor2-server.vercel.app/bookings/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          const remaining=bookings.filter(booking=>booking._id !== id)
          const updated=bookings.find(booking=>booking._id !== id)
          updated.status='confirm'
          const newbook=[updated,...remaining]
          setbookings(newbook)
          
        }
      })

    }
      
    return (
        <div className="lg:mx-40">
            <Navbar></Navbar>
            <h1>All Bokkings Is Here {bookings.length}</h1>


                    
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
    <div>
    {
        bookings.map(booking=><Bookingsshow
         key={booking._id} 
         booking={booking}
         handledelte={handledelte}
         handleupdate={handleupdate}
         >

        </Bookingsshow>)
    }
    </div>
   
     
    </tbody>
   
    
  </table>
</div>
       

        </div>
    );
};

export default Bookings;