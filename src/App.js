import RouterExample from './phase one/RouterExample';
import UserDetailContext from './phase two/UserDetailContext';
import ShowUserDetails from './phase two/ShowUserDetails';
import Home from './phase two/Home';
import HooksExample from './phase two/HooksExample';
import FluxExample from './phase two/FluxExample';
import UserDetails from './phase two/UserDetails';
import ReduxExample from './phase two/ReduxExample';


function App() {
  const userDetail={
 Name:"vinimeena",
 Age:"20",
 Address:"chennai",
ContactNo:"8056175669"
}

return(
 <>
<FluxExample />
<UserDetails />
<ReduxExample />
 </>
)    
}

export default App;

     