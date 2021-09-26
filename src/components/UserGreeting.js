import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() { 
        "Short Circuit Operator"

        // return this.state.isLoggedIn && <h1>Hello  Anas</h1>
        "Ternary Conditional Operator"
        // return(
        //     this.state.isLoggedIn ?
        //     <h1>Hello Anas</h1> :
        //     <h1>Hello Zubair</h1> 

        // )
        "Element Variable "
        // let msg
        // if(this.state.isLoggedIn){
        //     msg = <h1>Hello Anas</h1>
        // }else{
        //     msg = <h1>Hello Zubair</h1>
        // }
        // return <div>{msg}</div>

        "IF ELSE"
        // if (this.state.isLoggedIn){
        //     return(
        //         <h1>Hello Anas</h1>
        //     )
        // }else{
        //         return<h1>Hello Zubair</h1>
        // }
        // return (

        //     <div>
        //        <h1> Hello Anas</h1>

        //        <h1> Hello Zubair</h1>
        //     </div>
        // )
    }
}

export default UserGreeting
