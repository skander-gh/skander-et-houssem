import React from 'react'

import {Card,ListGroup , ListGroupItem} from 'react-bootstrap' 

import '../Salles/Salles.css'


function CoachCard({el}) {
  
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
   <ListGroupItem> Numéro de téléphone : {el.contactTélé}</ListGroupItem>
   <ListGroupItem>Prix Par Mois :  {el.prix} Dt</ListGroupItem>
 </ListGroup>

</Card>
</div>
<br></br>
    </div>
  )
}

export default CoachCard