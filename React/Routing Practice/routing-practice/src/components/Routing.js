import React from 'react';


const Routing = ({variable, color1, color2}) => {
    return (
        <h1 style={{color: color1, backgroundColor:color2}}>

            {
            isNaN(variable)?
            variable === "Welcome" ? variable : `The word is: ${variable}`
            : `The number is: ${variable}`
        } 

        </h1>
    )
}

export default Routing
  // {props? <h1>Welcome</h1>:null}
            // {props.hello?<h1>The World is: {props.hello}</h1>:null }
            // {props.color1?<h1 style={{color:props.color1,background:props.color2}}>The World is: {props.hello}</h1>:null }
            // {isNaN(props)?null:<h1>The Number is: {props.id}</h1> }