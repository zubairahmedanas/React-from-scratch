import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() { 
        

        return this.state.isLoggedIn && <h1>Hello  Anas</h1>
        
        return(
            this.state.isLoggedIn ?
            <h1>Hello Anas</h1> :
            <h1>Hello Zubair</h1> 

        )
       
        // let msg
        // if(this.state.isLoggedIn){
        //     msg = <h1>Hello Anas</h1>
        // }else{
        //     msg = <h1>Hello Zubair</h1>
        // }
        // return <div>{msg}</div>

        
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
