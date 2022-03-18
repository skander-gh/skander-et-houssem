import React from 'react'
import {ListGroup ,Button  } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  deleteUser } from '../../redux/actions/usersActions';


function CardAdmin({ el}) {


  const dispatch=useDispatch()
  const handleDelete=()=>{
    if (window.confirm('Are you sure'))
    {dispatch(deleteUser(el._id))}
  }

  return (
    <div>
        <ListGroup>
         

<ListGroup.Item action variant="success"> Email: {el.email} </ListGroup.Item>
<ListGroup.Item action variant="success"> id: {el._id} </ListGroup.Item>

<Button variant="danger" onClick={handleDelete}> Delete </Button>

</ListGroup>



    </div>
  )
}

export default CardAdmin