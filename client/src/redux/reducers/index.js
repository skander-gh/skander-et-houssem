import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from "./contactReducer"
import userReducer from "./usersReducer";
import alert from "./alert";
const rootReducer= combineReducers({authReducer,
    contactReducer ,
     userReducer , alert })

export default rootReducer