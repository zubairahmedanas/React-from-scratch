import React from 'react'

function FunctionClick() {
    function clickHndler(){
        console.log('I have clicked')
    }
    return (
        <div>
            <button onClick={clickHndler}>CLICK</button>
        </div>
    )
}

export default FunctionClick
