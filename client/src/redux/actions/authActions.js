import {  CLEARERRORS, FAIL, GET_CURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/authTypes"
import axios from "axios"
import { setAlert } from "./alertActions"
export const signup= (data,navigate)=> async (dispatch)=>{

    try {
        const res= await axios.post('/auth/SignUp',data)

        dispatch({type:SIGNUP, payload: res.data})// msg token user
        navigate('/')
    } catch (error) {
        console.log(error.response.data)
        dispatch({type:FAIL,  payload: error.response.data})//errors
        error.response.data.errors.forEach(error=>dispatch(setAlert(error.msg)))
    }
}
export const signin= (data,navigate)=> async(dispatch)=>{
    try {
        const res= await axios.post('/auth/signIn',data)
    
        dispatch({type:SIGNIN, payload: res.data}) // msg token user

        if(res.data.user.role==="admin"){
            navigate('/admin')
        }else{
            navigate('/ProgrammeDeMuscu')
        }
    } catch (error) {
        dispatch({type:FAIL, payload: error.response.data}) // errors
        error.response.data.errors.forEach(error=>dispatch(setAlert(error.msg)))
    }
    } ;

    export const getcurrent= ()=>async (dispatch)=>{

        const token = localStorage.getItem('token')
    
        const config= {
            headers: {
                authorization: token
            }
        }
        try {
            const res= await axios.get('/auth/me',config)
    
            dispatch({type:GET_CURRENT,payload:res.data})
            console.log(res.data)
        } catch (error) {
            dispatch({type:FAIL, payload: error.response.data})
        }
    }


    export const logout=()=>{

        return {type:LOGOUT}
    }

    export const clearErrors=()=>{

        return {type:CLEARERRORS}
    }