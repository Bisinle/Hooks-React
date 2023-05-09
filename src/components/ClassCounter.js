import React, { Component } from 'react'

 class ClassCounter extends Component {
  constructor (props){
    super(props)
    this.state = {
      count:0
    }
  }

  increment = () =>{
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (

      
      <div>
        
        <h3>Class State </h3>
        <button onClick={this.increment}>count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
