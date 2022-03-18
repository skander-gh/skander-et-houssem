import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllUsers } from '../../redux/actions/usersActions';

import CardAdmin from './CardAdmin';


function GetUsers() {

    

    const users=useSelector(state=>state.userReducer.users)
    const dispatch=useDispatch()

  // get users

    useEffect(()=>{
      dispatch(getAllUsers())

      },[])
    
   
   return (  <div>

{users.map(el=><CardAdmin key={el._id} el={el}/>) }
    </div>
  )
}

export default GetUsers ;