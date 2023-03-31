import React, { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate=useNavigate();
    const [user,setUser]=useState({
        username:undefined,
        password:undefined
    })
    const change=(e)=>{
        const {name,value}=e.target
        setUser((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })  
    }
    const handleClick=async (e)=>{
        try {
            const res=await axios.post("http://localhost:8800/auth/login",user);

            navigate("/")
        } catch (error) {
            console.log(error)
        }
        e.preventDefault();
    }
    return( 
        <section className="vh-100">
  <div className="container py-5 h-100 login-container">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>

          <div className="form-outline mb-4">
            <input type="name" id="username1"  name="username"className="form-control form-control-lg" onChange={change} />
            <label className="form-label" htmlFor="username1">User Name</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="password1" name="password" className="form-control form-control-lg" onChange={change} />
            <label className="form-label" htmlFor="password1">Password</label>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block" style={{width:"100%"}} onClick={handleClick}>Sign in</button>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}
export default Login;