import {Card,ListGroup , ListGroupItem} from 'react-bootstrap' 
import React from 'react'
import './Salles.css'


function SallesCard({el}) {
 
 
  return (
    <div>
<div className="boxx">
<Card class="cards"  border="danger" style={{ width: '18rem' }} >
 
  <Card.Body >
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
     E-mail : {el.email}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Numéro de téléphone : + 216 {el.contactTélé}</ListGroupItem>
    <ListGroupItem>Prix Par Mois :  {el.prix} Dt</ListGroupItem>
    
  </ListGroup>
 
</Card>

</div>
<br></br>

 
    </div>
  )
}

export default SallesCard