import {  GET_ALL_USERS } from "../types/userTypes";



const initState={
    users: [],
    user:{},
    loading:true,
    }


    const userReducer=(state=initState,{type, payload})=>{
        switch (type) {
            case GET_ALL_USERS:
                return {...state,users:payload,loading:false}
           
               
            default:
               return state;
       }
    };

export default userReducer  ;







    