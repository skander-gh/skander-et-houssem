import React,{useEffect} from 'react'
import {Table,Button} from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux';
import { Link,Navigate , useNavigate} from 'react-router-dom';
import { deleteSalle, getSalle , getOneContact } from '../../redux/actions/contactAction';

function Salles() {
    const user=useSelector(state=>state.authReducer.user)
    const salles=useSelector(state=>state.contactReducer.salles)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
      dispatch(getSalle())
      },[])
      const handleDelete=(id)=>{
        if (window.confirm('Are you sure')){
        dispatch(deleteSalle(id))
      }
      }
      const handleEdit=(id)=>{
        dispatch(getOneContact(id))
        navigate('/EditContact')
        }
  return (
    <>
      {
          user.role==="admin" ? <>
         <Link to='/AddContact'><Button variant='primary'>Add Salle</Button></Link> 
          <Table striped bordered hover>
          <thead>
            <tr>
            <th>id</th>
              <th>Name</th>
              <th>email </th>
              <th>contactTélé</th>
              <th>prix </th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
          {
                salles.map(salles=><tr key={salles._id}>
                    <td>{salles._id}</td>
                      <td>{salles.name}</td>
                      <td>{salles.email}</td>
                      <td>{salles.contactTélé}</td>
                      <td>{salles.prix}</td>
                      <td><Button variant='danger' onClick={()=>handleDelete(salles._id)}>Delete</Button>
                       <Button variant='primary' onClick={()=>handleEdit(salles._id)} >Edit</Button></td>
                    </tr>)
            }
          </tbody>
        </Table></>:<Navigate to='/' />
      }
    </>
  )
}

export default Salles