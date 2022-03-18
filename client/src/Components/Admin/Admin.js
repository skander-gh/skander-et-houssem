
import { Button } from 'react-bootstrap';
import { Link,Navigate} from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';





function Admin() {
const user=useSelector(state=>state.authReducer.user)



 
  return (
    <div>
      <h3>Espace Admin :</h3>
      <br></br>
      <br></br>
      {
user.role==="admin"?       <>
  <Link to='/admin/coachs'><Button variant='warning'  size="lg">Coachs</Button></Link>
  <br></br>
  <br></br>
  <Link to='/admin/users'><Button variant='success' size="lg" >Users</Button></Link>
  <br></br>
  <br></br>
  <Link to='/admin/salles'><Button variant='info' size="lg">Salles</Button></Link>
</>:<Navigate to='/'/>
      }

  </div>
  
  )
}

export default Admin