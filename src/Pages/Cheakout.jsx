import { useLoaderData } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";


const Cheakout = () => {
    const {user}=useContext(AuthContext)
    const service=useLoaderData()
    const{title,price,img,_id}=service


    const handlebook=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const date=e.target.date.value
        const email=user?.email
        const amount=e.target.amount.value
        const order={
            customerName:name,
            img,
            email,
            date,
            amount,
            services:title,
            services_id:_id,
            price:price
        }
        console.log(order)
        fetch('https://car-doctor2-server.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }
    return (
        <div className="lg:mx-40">
            <div>
                <Navbar></Navbar>
                <div>
            <div className="my-10">
            <h1 className="text-4xl font-bold text-center">Services Booking <br /> <span className="text-amber-300">{title}</span> </h1>
      <form onSubmit={handlebook} className="card-body">
        <div className="grid lg:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="amount" className="input input-bordered" required />
        </div>
       
        </div>
        <div className="form-control mt-6 p-2 font-bold bg-teal-500">
          <input  type="submit" value="Order Confirm" />
        </div>
      </form>

 </div>
 </div>

        </div>
        </div>
       
    );
};

export default Cheakout;