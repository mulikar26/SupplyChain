import React from 'react'
import {  Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams} from "react-router-dom";
import axios from 'axios';
export default function ViewUser(props) {


    const {id}=useParams()

    const [user,setUser]=useState({
        name:"",
        email:"",
        address:""
     
    })

    useEffect(()=>{
        loadUser()
      },[]);

      const loadUser =async () => {
        const result= await axios.get(`http://localhost:8080/retailer/${id} `)
        setUser(result.data)
      };
  

  return (
    <div className='container'>
         <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
         <h2 className='text-center m-4 border shadow bg-light text-dark'>Retailer Details</h2>
         <div className="card">
            <div className="card-header">
                Details of user id : {user.id}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Name:</b>
                        {user.name}
                    </li>
                    <li className="list-group-item">
                        <b>Email:</b>
                        {user.email}
                    </li>
                    <li className="list-group-item">
                        <b>Address:</b>
                        {user.address}
                    </li>
                   
                </ul>
            </div>
         </div>
         <Link className="btn btn-primary my-2" to={`/${props.us}/retailertable`}>Back </Link>
         </div>
    </div>   
     
  )
}



