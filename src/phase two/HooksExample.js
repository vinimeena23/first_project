import React, { useContext,useEffect, useState } from 'react'
import UserContext from './UserDetailContext';


function HooksExample(){
    const[name, setName]= useState( 'svs');
    const[address, setAddress]=useState('chennai');
    const[stdObj, setStdObj]= useState({name:'meena', age : 21});
    const userDetail=useContext(UserContext);
     function updateName(){
        setName("chandru");
     }
     function updateStudentName(){
        const std ={
            name :"suresh",
            age:20
        }
        setStdObj(std);
     }

     useEffect(() =>{
      alert("Working fine....");
     })

     return (
      <div>
         <h1> HooksExample</h1>
         <center>
         <h2>useState</h2>
         </center>
         <h3>Name:{name} </h3>
         <h3>Address:{address}</h3>
         <h3>Student name:{stdObj.name}</h3>
         <h3>Student Age:{stdObj.age}</h3>
         <center>
         <h2>useContext</h2>
         </center>
         <h3>UserName:{userDetail.Name}</h3>
         <h3>Age:{userDetail.Age}</h3>
         <h3>Address:{userDetail.Address}</h3>
         <button Onclick={updateName}>UpdateName</button>
         <button Onclick={updateStudentName}>UpdateStdName</button>
      </div>
     )
}
export default HooksExample