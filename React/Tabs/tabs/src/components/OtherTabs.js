import React from "react";


const OtherTabs = (props) => {
    const handleClick = (e, contants) =>{
        props.selectedContant(contants);
        
    }
    return(
        <>
        {props.items.map((items,index) => <button  onClick={e => handleClick(e, items.Contant)}> {items.label} </button>)}
        </>
    )

}
export default OtherTabs;
