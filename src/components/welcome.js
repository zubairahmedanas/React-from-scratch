import React from 'react'

const Welcome = props => {
    console.log(props)
    return (
    <div>
        <h1> Hello {props.name} a.k.a {props.designationName}</h1>
        {props.children}
    </div>
    )
}

export default Welcome