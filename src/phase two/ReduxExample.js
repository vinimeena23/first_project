import React from 'react';
import {Connect} from "react-redux";

const ReduxExample =({count,userDetail,increment,decrement})=> {
    return (
        <div>
            <h1>Redux Example</h1>
            <h3>Count :{count}</h3>
            <h3>Username:{userDetail.userName}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const dispatchingTheRequest=(dispatch)=> ({
    increment:()=>{
        dispatch:({type:"Increment"})
    },
    decrement:()=>{
        dispatch:({type:"Decrement"})
    }
})

const mapState=(state)=> ({
    count:state.count,
    userDetail:state.userDetails
})

export default Connect(mapState,dispatchingTheRequest)(ReduxExample)