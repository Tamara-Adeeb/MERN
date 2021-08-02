import React,{useState} from "react";
import StyledButton from "./StyledButton";


const Tabs = (props) => {
    const [content, setContent] = useState("");
    const [required, setRequired] = useState(false);
    
    
    const handleClick = (e,index) =>{
        setContent(e.target.value);
        const allButtons = document.getElementsByClassName("art");
        console.log(allButtons[0]);
        const button = document.getElementById(index);
        
        for (let i = 0; i < allButtons.length; i++ ) {
            console.log(i);
            
            allButtons[i].style.backgroundColor = "white";
            allButtons[i].style.color = "palevioletred";
            
        }
        button.style.backgroundColor = "palevioletred";
        button.style.color =  "white";
    }
    return(
        <>
        {props.items.map((item,index) => <StyledButton key={index} name={false} id={index} className='art' primary={required} value={item.Contant} onClick={e => handleClick(e, index)}> {item.label} </StyledButton>)}
        
        <p>{content}</p>
        </>
    )

}

export default Tabs