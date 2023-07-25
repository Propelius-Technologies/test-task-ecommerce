import { combineReducers } from "@reduxjs/toolkit";
import addToCart from "./addToCart";


const rootReducer = combineReducers({
    addToCart : addToCart
})
export default rootReducer;