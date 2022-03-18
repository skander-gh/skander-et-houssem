import React, { useState } from 'react';
import {Form ,Button , Row  } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../redux/actions/contactAction';


function AddContact() {
    const [FormData,setFormData]= useState({name:"",email:"", contactTélé:"",prix:"",role:"" })
 

  const navigate= useNavigate()
  const dispatch =useDispatch()

  const handleChange=(e)=>{
    setFormData({...FormData,[e.target.name]:e.target.value})
  };
  const handleAdd=(e)=>{
    e.preventDefault()
    dispatch(addContact(FormData))
    navigate("/admin")
  }

  return (
    <div>

<Form>


<Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>name</Form.Label>
    <Form.Control type='text' placeholder="name" name='name' value={FormData.name} onChange={handleChange} />
</Form.Group>
<Row className="mb-3">
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"   name="email" 
         value ={FormData.email}  onChange={handleChange} />
      </Form.Group>
</Row>

<Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>contactTélé</Form.Label>
    <Form.Control type='text' placeholder="contactTélé" name='contactTélé' value={FormData.contactTélé}onChange={handleChange}  />
</Form.Group>
<Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>prix</Form.Label>
    <Form.Control type='number' placeholder="prix" name='prix' value={FormData.prix}onChange={handleChange}  />
</Form.Group>
<Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Role</Form.Label>
    <Form.Control type='text' placeholder="coach or salle" name='role' value={FormData.role}onChange={handleChange}  />
</Form.Group>

<Button onClick={handleAdd}>Add</Button>
        

</Form>


    </div>
  )
}

export default AddContact