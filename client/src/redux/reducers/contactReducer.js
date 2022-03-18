import { GETCOACH,GETSALLE  , GET_CONTACT, TOGGELE_FALSE, TOGGELE_TRUE } from "../types/contactTypes";


const initState={
coachs: [],
salles:[],
contact:{},
loading:true,
edit:false
}



const contactReducer=(state=initState,{type, payload})=>{
    switch (type) {
        case GETCOACH:
            return {...state,coachs:payload,loading:false}
            case GETSALLE:
                return {...state,salles:payload,loading:false}
            case TOGGELE_TRUE:
                return {...state,edit:true};
 
                case TOGGELE_FALSE:
                 return {...state,edit:false};
                 case GET_CONTACT:
                     return {...state,contact:payload,loading:false}
           
           
            default:
           return state;
   }
};
export default contactReducer;