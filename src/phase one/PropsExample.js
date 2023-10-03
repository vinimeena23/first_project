/**
 * pops - pass data one component to another
 * it is read only we can use both functional amd class component
 */

import React from 'react'

/**
 * props{
 * name:"vinimeena",
 * age:"19"
 * }
 *
 */

function PropsExample(props){
    return (
    <div>
            <h2>PropsExample</h2>
            <h3>Name: {props.stdObj.Name} </h3>
            <h3>Age: {props.stdObj.Age} </h3>
            <h3>Addresss: {props.stdObj.Address} </h3>
            <h3>ContactNo: {props.stdObj.ContactNo}</h3>
                    </div>
    );
}
export default PropsExample;