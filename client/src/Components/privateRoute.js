import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import "./home/Home.css"

function PrivateRoute({children}) {

    const token= localStorage.getItem('token')
    const {auth,loading}= useSelector(state=>state.authReducer)
    console.log(loading)
    console.log(children)
  return <div>

{ loading ? <div class="wrapper">
    <div class="typing-demo">
      You Have To Sign In !!
    </div>
</div>:token && auth ? children : <Navigate   to='/signin' />    }
 
  </div>;
  
 
}

export default PrivateRoute;