import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const SupplierTable=(props)=> {
    const [users,setuser]=useState([]);
    const {id}= useParams()
    useEffect(()=>{
loadSuppliers()
    },[])
    const loadSuppliers=async()=>{
        const result=await axios.get('http://localhost:8080/supplier')
        setuser(result.data)
    }
    const deleteSupplier=async id=>{
      await axios.delete(`http://localhost:8080/supplier/${id}`)
      loadSuppliers()
    }
  return (
    <div className='container'>
    <div className='py-4'>SupplierTable
    <table className="table table table-bordered border ">
   < tr>
   <th>Id</th>
   <th scope="col">Name</th>
<th scope="col"> Phone</th>
<th scope="col"> email</th>
<th scope="col"> location</th>
<th scope="col"> Country</th>
<th scope="col"> part id</th>
<th scope="col"> part name</th>
<th scope="col">Action</th>
</tr>
  <tbody>
    {users.map((user,index)=>(
        
        
<tr> 
    <td scope='row' key="index">{user.id}</td>
    <td> {user.name}</td>
<td> {user.phone}</td>

<td> {user.email}</td>
<td> {user.location}</td>
<td> {user.country}</td>
<td> {user.part_id}</td>
<td> {user.part_name}</td>




<td>
    <Link className="btn btn-primary mx-2"
   to={`/${props.us}/viewsupplier/${user.id}`}
   
    > View</Link>

    {/* <Link className="btn btn-outline-primary mx-2" 
    to={`/${props.us}/editsupplier/${user.supplier_id}`}      
    >Edit </Link> */}

    <button className="btn btn-danger mx-2"
    onClick={()=>deleteSupplier(user.id)}>Delete </button>
</td>
</tr>

    ))}
    
     
  </tbody>
</table>
</div>
</div>
  )
}
export default SupplierTable