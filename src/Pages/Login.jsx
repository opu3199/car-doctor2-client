import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import login from'../assets/image/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import axios from "axios";


const Login = () => {
    const {createlogin,user}=useContext(AuthContext)
    const location =useLocation()
    const navigate=useNavigate()
    console.log(location)
    const handlelogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        createlogin(email,password)
        .then(res=>{
          const loggeduser=res.user
          console.log(loggeduser) 
          const user={email}
          
          //access token
          axios.post('http://localhost:5000/jwt',user,{
            withCredentials:true})
          .then(res=>{
            console.log(res.data)
            if(res.data.success){
               navigate(location?.state ? location?.state : '/') 
            }
          })

        })
        .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div className='lg:mx-40 '>
        <Navbar></Navbar>
                <div className='lg:flex my-10 items-center'>
                    <img src={login} alt="" />
                <div className="hero  w-full ">
                <div className="hero-content w-full flex-col">
                    
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlelogin} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                       
                         <button className="btn btn-primary">Login</button>
                       
                      </div>
                      <p>Have your account?<Link to="/register"> Register</Link> first</p>
                    </form>
                  </div>
                </div>
              </div>
              </div>
              </div>
    );
};

export default Login;