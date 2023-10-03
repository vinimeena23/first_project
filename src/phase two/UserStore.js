import React from 'react';
import {createStore} from "redux";

//State Creation
const initialState={
    count:5,
    name:"vini",
    UserDetails:{}
}

/**
 * action={
 * type:"Save",
 * data:{
 * name:"vini",
 * age:20}}
 */
//Dispatcher
const reducer =((state=initialState,action)=>{
    switch(action.type){
        case "Save": return {...state,userDetails:action.data}
        break;
        case "increment":return{...state,count:state.count+1}
        break;
        case "decrement":return{...state,count:state.count-1}
        break;
        default:return state;
    }
})

//Store creation
const UserStore =createStore(reducer);
export default UserStore;

 
