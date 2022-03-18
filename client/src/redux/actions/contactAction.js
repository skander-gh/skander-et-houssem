import axios from 'axios'
import { GETCOACH, GETSALLE, GET_CONTACT, TOGGELE_FALSE, TOGGELE_TRUE } from '../types/contactTypes';


export const getCoach=()=>async(dispatch)=>{

    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
try {
    const res = await axios.get('/contacts/coach',config)
    dispatch({ type : GETCOACH, payload: res.data});
} catch (error) {
    console.log(error)
}
}

export const getSalle=()=>async(dispatch)=>{

    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/contacts/salle',config)
        dispatch({ type : GETSALLE, payload: res.data});
    } catch (error) {
        console.log(error)
    }
    }





export const addContact=(FormData)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
     const res= await axios.post('/contacts',FormData,config)
     console.log(res.data)
       
    } catch (error) {
        console.log(error)
    }
}


export const deleteSalle=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
      await axios.delete(`/contacts/salle/${id}` , config)
     dispatch(getSalle());
     
    } catch (error) {
        console.log(error)
    }
}

export const deleteCoach=(id)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
      await axios.delete(`/contacts/coach/${id}` , config)
     dispatch(getCoach());
      
    } catch (error) {
        console.log(error)
    }
}


export const editContact=(id,FormData)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
      const res=  await axios.put(`/contacts/${id}`,FormData , config)
       console.log(res.data)
    } catch (error) {
        console.log(error)
    }
};


export const toggeleTrue=()=>{
    return {
    
        type: TOGGELE_TRUE
    }
    }

    export const toggeleFalse=()=>{
        return {
            type: TOGGELE_FALSE
        }
    };

    export const getOneContact=(id)=>async(dispatch)=>{
        try {
           const res = await axios.get(`/contacts/${id}`)
            dispatch({type:GET_CONTACT , payload:res.data})
        } catch (error) {
            console.log(error)
        }
    };