import logo from '.log.svg';
import UserContext from './phase two/UserDetailContext';
import ReduxExample from './phase two/ReduxExample';
import {provider} from 'react-redux';
import UserStore from './phase two/UserStore';

function App(){
    return(
        <provider store ={UserStore}>
            <ReduxExample/>
        </provider>
    );
}
export default App;