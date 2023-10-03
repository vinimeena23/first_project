import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ListExample from './ListExample';
import PropsExample from './PropsExample';


class RouterExample extends Component {
    render() {
        return (
            <div>
                <center>
                <h1>RouterExample</h1>
                </center>




                                <Router>
                    <ul>

                        <li>
                            <Link to="/propsExample">PropsExample</Link>
                        </li>
                    </ul>
                    <Routes>
                        
                        <Route path='/propsExample' element={
                        
                         <ListExample/>       
            
                        }></Route>

                    </Routes>
                </Router>


            </div>
        )
    }
}
export default RouterExample