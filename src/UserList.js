import React,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
function UserList() {
    const [ listOfUser,setListOfUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            setListOfUser(data);
            console.log(data);
        })
    },[setListOfUser])
  return (
    <div className='container'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th id='icons'> # </th>
          <th className='title'>Name</th>
          <th className='title'> Username</th>
          <th className='title'>Email</th>
          <th className='title'>City</th>
          <th className='title'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
            listOfUser.map((user)=>{
                return(
             <tr className='user'>
                <td className='title'>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>
                )
                
            })
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default UserList