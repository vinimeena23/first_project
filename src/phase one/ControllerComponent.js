// import React, { Component } from 'react'

// class ControlledComponent extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             firstName: null, // null!=firsName
//             lastName: null,
//             subject: null,
//             address: null
//         }
//         this.updateFirstName = this.updateFirstName.blind(this);
//     }
//     updateFirstName(event) {
//         var name = new String(event.target.value);
//         var patternForOnlyAcceptAlphabets = /^[A-Za-Z]+$/;
//         if (patternForOnlyAcceptAlphabets.test(name)) {
//             this.stateState({
//                 firstName: event.target.value
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>ControllerComponent</h1>
//                 <form>
//                     <div>j
//                         <label>FirstName:</label>
//                         <input id="firstName" type='text'
//                             name="firstNAme" onChange={this.state.firstName} />
//                         <span>{this.state.firstName}</span>
//                     </div>
//                     <div>
//                         <label>LastName:</label>
//                         <input id="lastName" type='text'
//                             name="lastName" />
//                     </div>
//                     <div>
//                         <label> Subject:</label>
//                         <input id="subject" type='text'
//                             name="subject" />
//                     </div>
//                     <div>
//                         <label> Address:</label>
//                         <input id="address" type='text'
//                             name="address" />
//                     </div>
//                     <div>
//                         <button type='button'>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default ControlledComponent


