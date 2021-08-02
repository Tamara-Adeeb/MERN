import React,{useState,useEffect} from 'react'

const DisplayToDo = (props) => {
    const [error,setError] = useState("");
    const handelChange = (e,index) => {
        const toDoContant = document.getElementById(index);
        const input = document.getElementsByName(index);
        console.log(input[0]);
        console.log(toDoContant);
        if(input[0].checked === true ){
            toDoContant.style.textDecoration = "line-through";
        }else {
            toDoContant.style.textDecoration = "none";
        }
        
    }
    const deleteComponent = (e,index) =>{
        e.preventDefault();
        const input = document.getElementsByName(index);
        let element = document.getElementsByClassName(index);
        if(input[0].checked === true ){
            element[0].remove();
        }
        else{
                setError(" please check the item befor Delete");
                const p = document.getElementById(index+"0");
                p.hidden = false;
            // const error=<p>please check the item befor Delete</p>;
            // return error; // how can i return somthing in the html 
        }
        }
    return (
        <>
        {props.displayContant.map((item,index) => { return (<form key={index} onSubmit={e => {deleteComponent(e,index)}} className={index} >
            <label id={index}>{item}</label>
            <span id={index+"0"} hidden style={{color:"red"}}>{error}</span>
                <input
                name={index}
                type="checkbox"
                onChange={e=>{handelChange(e,index)}}
                />
                <input type="submit" value="Delete"/>
            </form>)})}
            
        </>
    )
}

export default DisplayToDo
