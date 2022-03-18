import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { clearErrors, signup } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

function SignUp() {

  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  
  
  const dispatch= useDispatch()
  const navigate= useNavigate()
  // const errors= useSelector(state=>state.authReducer.errors)
  // useEffect(() => { setTimeout(() => { 
  //    errors && errors.map((el) => alert(el.msg)); 
  //    if (errors) { dispatch(clearErrors()); } }, 1000); 
  //   }, [errors]); 


  return <div>
<div>

  <br></br>
  
        <div className="bold-line" />
        <div className="container">
          <div className="window">
            <div className="overlay" />
            <div className="content">
              <div className="welcome">Sign Up Buddy  </div>
              <br></br>
              
              <div className="input-fields">
              <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input-line full-width" />
                <input  value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="input-line full-width" />
                
              </div>
              
              <div><button className="ghost-round full-width" onClick={()=>dispatch(signup({email,password},navigate))} >Créer un compte</button></div>
            </div>
          </div>
        </div>
      </div>
</div>;
}

export default SignUp;
