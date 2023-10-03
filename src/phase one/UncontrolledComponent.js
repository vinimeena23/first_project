import  React, {Component} from 'react'

class UncontrolledComponent extends Component {


    constructor(props){
        super(props)
        
        this.refs = React.createRef();
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event){
        alert(this.refs.firstname.value=""+this.refs.lastName.value)
        console.log(this.refs.firstName.value);
        event.preventDefault();
    }

    render(){
        return(
            <div> 
                <h1> UncontrolledComponent</h1>
                <form>
                    <div>
                        <label>First Name: </label>
                        <input type='text'id="firstname" ref="firstName"/>
                    </div>
                    <div>
                        <label>last Name: </label>
                        <input type='text'id="lastname" resf="lastName"/>
                    </div>
                    <button onClick={this.formSubmit}>Submit</button>
                </form>
                
                            </div>
        )
    }
}

export default UncontrolledComponent