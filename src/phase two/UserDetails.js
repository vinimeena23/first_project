import React, {useRef} from 'react'
import {useDispatch,useSelector} from 'react-redux';

function UserDetails(){

    const firstName = useRef(null);
    const lastName = useRef(null);
    const age = useRef(null);
    const address = useRef(null);
    const dispatch = useDispatch();
    const UserDetails = useSelector ((state)=> state.userDetails)

    
    function saveUserDetails(event){
        const userDetails = {
            firstName: firstName.current.value,
            lastName : lastName.current.value,
            age:age.current.value,
            address:address.current.value
        }
        dispatch({ type:"SAVE",data:userDetails})
        alert(userDetails.firstName +""+userDetails.lastName+" "+userDetails.age+" "+userDetails.address)
        event.preventDefault();
    }

     return (
        <div>
            <h1>UserDetails</h1>
        <div>
        <h3>FirstName :{UserDetails.firstName}</h3>
        </div>
        <form>
<div>
        <label>FirstName:</label>
        <input type='text' name='firstName' ref={firstName} />
        </div>
        <div>
        <label>LasttName:</label>
        <input type='text' name='lastName' ref={lastName} />
        </div>
        <div>
        <label>Age:</label>
        <input type='text' name='age' ref={age} />
        </div>
        <div>
        <label>Address:</label>
        <input type='text' name='address' ref={address} />
        </div>
        <button onClick={(e) => saveUserDetails (e) }> Submit</button>
        </form>
        </div>
     )
}
 export default UserDetails