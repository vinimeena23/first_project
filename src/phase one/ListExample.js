import React, {Component} from 'react'

class ListExample extends Component {
    constructor(props) {
        super(props) 

        this.state = { 
            stdDetailsList:[
                    {id:234,  name:"....", address:  "chennai"},
                    {id:235,  name:"chandru", address: "chennai"},
                    {id:236,  name:"mohan", address:  "chennai"},
                    {id:237,  name:"siva", address:  "chennai"}
                ]

        }
    
    this.deleteRecords = this.deleteRecords.bind(this);
}

    deleteRecords(id){
    const filteredList = this.state.stdDetailsList
            .filter(std => std.id !== id);
            this.setState({
                stdDetailsList : filteredList
            })
        }

    render() {

        const number =[98,88,99,90];
        const nameList = ["....","chandru","mohan","siva"];
const iteratedNumberList = number.map(num=> {
    return <ol>{num}</ol>
})
const iteratedNameList = nameList.map(nam => {
    return <ol>{nam}</ol>
})
         return (
            <div>
                <h1>ListExample</h1>
                <h2>Number List</h2>
                <ul>
                    {iteratedNumberList}
                    </ul>
                    <h1>Orered Number List</h1>
                <ul>
                    {iteratedNameList}
                </ul>
                <h2> Student Details</h2>
                
                <table>
                    <tr>
                        <th> ID </th>   
                        <th> Name </th> 
                        <th> Address </th>
                        <th> Action </th>
                    </tr>
                    <tbody>
                        {this.state.stdDetailsList.map(std =>{
                            return <tr>
                                <td> {std.id} </td>
                                <td> {std.name} </td>
                                <td> {std.address} </td>
                                <td><button onClick={this.deleteRecords.bind(this, std.id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>

                </table>
                            </div>
         )
    }
}
export default ListExample