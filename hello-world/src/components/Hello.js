import React from "react";

const Hello = () => {
    // return (
    //     <dev>
    //         <h1> Hello Hem </h1>
    //     </dev>
    // )
    return React.createElement(
        'div', 
        {id:'helo', class: 'dummyclass'}, 
        React.createElement('h1', null, "hellloo"))
}

export default Hello