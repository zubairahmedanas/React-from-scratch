import React from 'react'


const Hello = () => {
    // return (
    //     <div> 
    //         <h1>Bismillah..</h1> 

    //     </div>

    // );
    return React.createElement('div',{id: 'hello ', className:'dummy class'},
    React.createElement('h1',null,'Bismillah...')
    
    )
}

export default Hello