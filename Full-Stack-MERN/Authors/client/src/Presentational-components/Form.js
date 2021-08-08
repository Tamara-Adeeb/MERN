import React,{useState} from 'react';

const Form = props => {
    const [name,setName] =useState("");
    const handelSubmit = e =>{
        e.preventDefault()
        props.onSubmit(name);
        setName("");
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Form;
