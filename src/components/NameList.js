import React from 'react'

function NameList() {
    const name = ['zubair', 'ahmed', 'anas']
    // const x = [
    //     {
    //         id:1,
    //         name: 'zubair',
    //         skill: 'react'

    //     },
    //     {
    //         id:2,
    //         name: 'Ahmed',
    //         skill: 'python'

    //     }  

    // ]
    const personList = name.map(person =>( 
        <h1 key={person}> {name}</h1>
    ))
    // const namelist = name.map(name => <h1 key>{name}</h1>)
    return (
        <div>
            
            {
                personList
            }
        </div>
    )
}

export default NameList
