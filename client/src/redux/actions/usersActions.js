import axios from "axios";
import {  GET_ALL_USERS } from "../types/userTypes";




export const getAllUsers=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/users',config)
        console.log(res.data)
        dispatch({ type : GET_ALL_USERS, payload: res.data  })

    } catch (error) {
        console.log()
    }
    }
    export const deleteUser= (id) =>async(dispatch)=>{
        const config={
            headers:{
                authorization:localStorage.getItem('token')
            }
        }
        try {
            const res = await axios.delete(`/users/${id}`,config)
            dispatch( getAllUsers())
    
        } catch (error) {
            console.log()
        }
        }