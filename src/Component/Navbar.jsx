import { NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";



const Navbar = () => {
  const {user,logout} =UseAuth() 
  const handlelogout=()=>{
    logout()
    .then(res=>console.log(res.user))
    .catch(error=>console.error(error))
  }

    const header=<div className="lg:flex text-2xl ">
         <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/about'>About </NavLink></li>
         <li><NavLink to='/service'>Services</NavLink></li>
         <li><NavLink to='/blog'>Blog</NavLink></li>
         
          {
            user?.email?<>
             <li><NavLink to='/bookings'>My Bookings</NavLink></li>
            <button onClick={handlelogout}>Logout</button>
            </>:<li><NavLink to='/login'>Login</NavLink></li>
          }  
    </div>



    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {header}
            </ul>
          </div>
          <div className="items-center">
          {/* <img src={logo} alt="" /> */}
        
        <a className="btn btn-ghost normal-case text-xl">Car Doctor</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {header}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-orange-500">Appoinment</a>
        </div>
      </div>
    );
};

export default Navbar;