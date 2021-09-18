import React from 'react'


// function Greet(){
//     return <h1>Hello Anas</h1>
// }
// export default Greet ;
// const Greet = () => <h1>Hello world</h1>
// export default Greet

const Greet = props => {
    console.log(props)
    return (
    <div>
        <h1> Hello {props.name} a.k.a {props.designationName}</h1>
        {props.children}
    </div>
    )
}

export default Greet