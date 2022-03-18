import{Form ,FormControl } from 'react-bootstrap';
import Exercices from './Exercices';

import {Navbar,Nav , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ExercicesListe({exercises,search,setsearch}) {
  return (
    <div>
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >Our Program:</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <>
        <Nav.Link  as={Link}  to='/PrisedeMasse'>Prise de Masse </Nav.Link>
        <Nav.Link  as={Link}  to='/ExercicesListe'>Exercices </Nav.Link>
        <Nav.Link  as={Link}  to='/PrisedeSeche'>Prise de Seche </Nav.Link>
        <Nav.Link  as={Link}  to='/Conseil'>Conseil </Nav.Link>
        </>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<br></br>
<br></br>
<Form className="d-flex">
           <FormControl onChange={(event)=>setsearch(event.target.value)}
             type="search"
             placeholder="You Can Search Here"
             className="me-2"
             aria-label="Search"
           />
         </Form>
         
   



{exercises.filter(el=> el.Title.toLowerCase().includes(search.toLowerCase())). map ((el=><Exercices el = {el} setsearch={setsearch} ></Exercices>))}

    </div>
  )
}

export default ExercicesListe ;