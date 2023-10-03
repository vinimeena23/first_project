import React from "react";
import{useDispatch,useSelector} from 'react-redux'

function FluxExample(){

const count=useSelector((state)=> state.count);
const dispatch = useDispatch();
const userDet= useSelector((state)=>state.userDetails); 
 
return (
    <div>
        <h1>FluxExample</h1>
        <h3>Count:{count}</h3>
        <h3>UserName:{userDet.name}</h3>
        <h3>Age:{userDet.age}</h3>
        <h3>Contact No:{userDet.contactno}</h3>
        <button onClick={() => dispatch({ type:'Increment'})}></button>
        <button onClick={() => dispatch({ type:'Decrement'})}></button>
        <button onClick={saveUserDetails}>Save</button>
    </div>
)

function saveUserDetails(){
    const userDetails ={
        name:"vini",
        age :24,
        contactNo:8248028003
    }
    dispatch({type:'SAVE',data:userDetails})
}
}

export default FluxExample


























