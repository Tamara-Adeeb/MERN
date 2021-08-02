import React,{useState,useEffect} from 'react'

const ToAdd = (props) => {
    const [toDo,setToDo] = useState("");
    const handelSubmit = (e)=>{
        e.preventDefault();
        props.contant(toDo);
        setToDo("");
        
    }
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input
                type="text"
                value={toDo}
                onChange={e => setToDo(e.target.value)}
                />
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default ToAdd
