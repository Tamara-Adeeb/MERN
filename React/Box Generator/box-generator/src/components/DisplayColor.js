import react, { useState } from 'react';

const DisplayColor = (props) => {
    
    return (
        <>
        {props.asd.map((box,index) => <div style={{background:box.color,width:box.widthOf,height:box.heightOf}} ></div>)}
        </>
    )
}
export default DisplayColor;