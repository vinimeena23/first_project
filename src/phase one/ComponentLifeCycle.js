import React, { Component } from 'react'

class ComponentLifeCycle extends Component {

    componentWillMount() {
       
        alert("Component loading started....")
    }

    componentDidMount(){
        alert("Component loading completed.....")
    }

  render() {
    return (
      <div>
        <h1>Component Life Cycle </h1>
      </div>
    )
  }
}

export default ComponentLifeCycle