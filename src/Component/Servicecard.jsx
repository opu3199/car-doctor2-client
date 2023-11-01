/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {AiOutlineArrowRight } from "react-icons/ai";

const Servicecard = ({services}) => {
    console.log(services)
    const {img,title,price,_id}=services
    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="h-64 w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold ">{title}</h2>
          <div className="flex justify-between">
          <p className="text-red-500 text-xl"> Price : {price}</p>
          <p className="text-red-500 text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></p>
          </div>
          <div className="text-center">
      <Link to={`/checkout/${_id}`}>
        <button className="btn"> Book Now</button>
        </Link>
        </div>
          
        </div>
      </div>
     
       </div>
    );
};

export default Servicecard;