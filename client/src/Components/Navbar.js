import React from 'react';
import{Navbar,Nav,Container} from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

function Navbare() {
  const auth= useSelector(state=>state.authReducer.auth)
  const dispatch = useDispatch()
  return <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"   >
  <Container  >
  <Navbar.Brand >YM</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll"   />
  <Navbar.Collapse id="navbarScroll"  >
  <Nav className="me-auto" space   >
      
      <Nav.Link as={Link} to='/'>Accueil</Nav.Link>  
      <Nav.Link   as={Link}  to='/ProgrammeDeMuscu'  >Programme De Musculation</Nav.Link>
        <Nav.Link   as={Link}  to='/MeilleursSalleEnTunis'  >Meilleurs Salle En Tunis</Nav.Link>
        <Nav.Link   as={Link}  to='/MeilleursCoachEnTunis'  >Meilleurs Coach En Tunis</Nav.Link>
        
        {auth  ?   
          <Nav.Link  onClick={()=> dispatch(logout())}  >Logout</Nav.Link> :
        <>
        
        <Nav.Link   as={Link} to='/signin'  >Sign In</Nav.Link> 
        
        <Nav.Link   as={Link}  to='/signup'  >Sign Up</Nav.Link>
        
        </>}


      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  </div>;
}

export default Navbare;
