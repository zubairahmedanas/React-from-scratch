import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increament(){
        // this.setState({
        //     count: this.state.count+1
        // },
        // ()=> {
        //     console.log('Calling back', this.state.count)
            
        // })
        
        // // this.state.count = this.state.count+1
        // console.log(this.state.count)
        this.setState(prevState => ({
            count: prevState.count+1
        }))
        console.log(this.state.count)
    }
    increamentTwo(){
        this.increament()
        this.increament() 
    }


    render() {
        return (
            <div>
               <div>count - {this.state.count}</div> 
               <button onClick={()=>this.increamentTwo()}>Increament</button>
            </div>
        )
    }
}

export default Counter
