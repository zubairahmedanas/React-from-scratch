import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        this.Handler=this.Handler.bind(this)
    }
    Handler(){
        this.setState({
            message: 'Good Bye...!!!'
        })

       
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <button onClick={this.Handler} >PRESS ME</button>
            </div>
        )
    }
}

export default EventBind
