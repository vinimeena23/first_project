import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ListExample from './ListExample';
import PropsExample from './PropsExample';
import {lazy} from 'react'
import{Suspense} from 'react'
import Home from './Home';


const ControllerComponent = lazy(( )=> import('../phase one/ControllerComponent'))
const Home = lazy(()=>import('./Home'))

class RouterExampleClass extends Component {
    render() {
        return (
            <div>
                <center>
                <h1>RouterExample</h1>
                </center>


                                <Router>
                    <ul>
                        <li>
                            <Link to="/">ControllerComponent</Link>
                        </li>
                        <li>
                            <Link to="/propsExample">PropsExample</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path='/' element={<ControllerComponent />}> </Route>
                        <Route path='/propsExample' element={
                            <Suspense>
                         <ControllerComponent/>  
                            
                            </Suspense>
                        }></Route>
                        <Route path='/propsExample' element={<Suspense> <Home/> </Suspense>} ></Route>
                    </Routes>
                </Router>


            </div>
        )
    }
}
export default RouterExampleClass