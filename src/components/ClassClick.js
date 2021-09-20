import React, { Component } from 'react'

class ClassClick extends Component {
    clickHndler(){
        console.log('I have clicked Classclicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHndler}>CLICK ME</button>
            </div>
        )
    }
}

export default ClassClick
