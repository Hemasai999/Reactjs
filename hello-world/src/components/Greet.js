import React from 'react'

// function Greet(){
//     return <h1> Hello Hema</h1> 
// }

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1> 
                Helo {props.name} aka {props.heroname} 
            </h1>
            {props.children}
        </div>
        )
}

export default Greet