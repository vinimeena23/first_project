import React, {Component} from 'react'
import UserDetailContext from './UserDetailContext'

class ShowUserDetails extends Component {
    static userDetail = UserDetailContext;
    render(){
        return (
            <div>
                <h1>ShowUserDetails</h1>
                <UserDetailContext.Consumer>
                    {(userDetail)=>
                    userDetail &&(
                        <>
                        <h3>{userDetail.Name}</h3>
                        <h3>{userDetail.Age}</h3>
                        <h3>{userDetail.Address}</h3>
                        
                        </>
                    )}
                </UserDetailContext.Consumer>
            </div>
        )
    }
}
export default ShowUserDetails