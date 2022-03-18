import React, { useEffect, useState } from 'react';
import {Form ,Button , Row  } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { editContact } from '../../redux/actions/contactAction';
function EditContact() {
  const [FormData,setFormData]= useState({name:"",email:"", contactTélé:"",prix:"",role:"" })
 
 const contact=useSelector(state=>state.contactReducer.contact)


useEffect(()=>{
    contact&&setFormData({name:contact.name,email:contact.email, contactTélé:contact.contactTélé,prix:contact.prix,role:contact.role })
},[contact])

    const navigate= useNavigate()
    const dispatch =useDispatch()
  
   
    const handleChange=(e)=>{
      setFormData({...FormData,[e.target.name]:e.target.value})
    };
    const  handleUpdate=(e)=>{
      e.preventDefault()
      dispatch(editContact(contact._id,FormData))
      navigate("/admin")
    }
  return (
    <div>
        
        <Form onSubmit={handleUpdate}>


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

<Button type="submit" >Edit</Button>
        

</Form>
        
        
        
        
        
        
        
        </div>
  )
}

export default EditContact