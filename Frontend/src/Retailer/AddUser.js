import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function AddUser(props) { 

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        email:"",
        address:""
       
    })

    const{name,email,address}=user

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
         await axios.post("http://localhost:8080/retailer",user)
         navigate(`/${props.us}/retailertable`)
    }

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
           <h2 className='text-center m-4'>Register Retailer</h2>

           <form onSubmit={(e)=>onSubmit(e)}>
           <div className='mb-3'>
              <lable htmlFor='Name'  className='form-lable'>
                 Name
              </lable>

              <input
               type={"text"}
               className="form-control"
               required
               placeholder="Enter your name"
               name="name"
               value={name}
               onChange={(e)=>onInputChange(e)}/>
           </div>



           <div className='mb-3'>
              <lable htmlFor='Email'  className='form-lable'>
                 Email
              </lable>

              <input
               type={"email"}
               required
               className="form-control"
               placeholder="Enter your email"
               name="email"
               value={email}
               onChange={(e)=>onInputChange(e)}/>
           </div>



           <div className='mb-3'>
              <lable htmlFor='Address'  className='form-lable'>
                 Address
              </lable>

              <input
               type={"text"} required
               className="form-control"
               placeholder="Enter your address"
               name="address"
               value={address}
               onChange={(e)=>onInputChange(e)}/>
           </div>
           <button type="submit" className="btn btn-outline-primary " > Submit </button>
           <Link  className="btn btn-outline-danger mx-2 " to={`/${props.us}/retailertable`}> Cancel </Link>
           </form>
        </div>
        
    </div>
  )
}
