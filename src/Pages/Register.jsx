import { Link } from "react-router-dom";
import register from '../assets/image/images/login/login.svg'
import Navbar from "../Component/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";


const Register = () => {
    const {createregister}=useContext(AuthContext)
    const handleregister=e=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password,name)
        createregister(email,password)
        .then(res=>console.log(res.user))
        .catch(error=>console.error(error))

    }
    return (
        <div className='lg:mx-40 '>
        <Navbar></Navbar>
                <div className='lg:flex my-10 items-center'>
                    <img src={register} alt="" />
                <div className="hero  w-full ">
                <div className="hero-content w-full flex-col">
                    
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Account Now!</h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleregister} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                      </div>
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
                        <button className="btn btn-primary">Register</button>
                      </div>
                      <p>complete register?<Link to='/login'> Login</Link> please</p>
                    </form>
                  </div>
                </div>
              </div>
              </div>
              </div>
    );
};

export default Register;