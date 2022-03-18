
import React,{useEffect} from 'react'
import { Link,Navigate, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Table,Button} from 'react-bootstrap'
import { deleteCoach, getCoach, getOneContact } from '../../redux/actions/contactAction'

function Coachs() {
  
    const user=useSelector(state=>state.authReducer.user)
    const coachs=useSelector(state=>state.contactReducer.coachs)
    const dispatch=useDispatch()
const navigate=useNavigate()

    useEffect(()=>{
      dispatch(getCoach())
      },[])

      // action delete coach
      const handleDelete=(id)=>{
        if (window.confirm('Are you sure')){
        dispatch(deleteCoach(id))
      }
      }
//  edit coach component
const handleEdit=(id)=>{
dispatch(getOneContact(id))
navigate('/EditContact')
}

  return (
      <>
      {
          user.role==="admin" ?<> 
          <Link to='/AddContact'><Button variant='primary'>Add Coach</Button></Link> 
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
                coachs.map(coach=><tr key={coach._id}>
                    <td>{coach._id}</td>
                      <td>{coach.name}</td>
                      <td>{coach.email}</td>
                      <td>{coach.contactTélé}</td>
                      <td>{coach.prix}</td>
                      <td><Button variant='danger'onClick={()=>handleDelete(coach._id)} >Delete</Button>
                       <Button variant='primary' onClick={()=>handleEdit(coach._id)} >Edit</Button> </td>
                    </tr>)
            }
            
          </tbody>
        </Table></>:<Navigate to='/' />
      }
      

    </>
  )
}

export default Coachs