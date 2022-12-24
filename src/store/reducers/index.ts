import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";


 const reducers = combineReducers({
    users: userReducer
})

export default reducers

