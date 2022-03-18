import React,{useEffect} from 'react'
import {Table,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { getAllUsers , deleteUser } from '../../redux/actions/usersActions';


function Users() {
    const user=useSelector(state=>state.authReducer.user)
    const users=useSelector(state=>state.userReducer.users)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getAllUsers())
      },[])
      const handleDelete=(id)=>{
        if (window.confirm('Are you sure')){
        dispatch(deleteUser(id))
      }
      }
  return (
    <>
    {
        user.role==="admin" ? <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>email </th>
            <th>actions </th>
          </tr>
        </thead>
        <tbody>
          {
                users.map(user=><tr key={user._id}>
                    <td>{user._id}</td>
                      <td>{user.email}</td>
                      <td><Button variant='danger' onClick={()=>handleDelete(user._id)} >Delete</Button>
                     </td>
                    </tr>)
            }
          </tbody>
      </Table>:<Navigate to='/' />
    }
  </>
  )
}

export default Users