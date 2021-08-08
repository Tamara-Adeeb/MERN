import React,{useState} from 'react';

const Form = props => {
    const [name,setName] =useState(props.author);

    const handelSubmit = e =>{
        e.preventDefault();
        props.onSubmit(name);
        setName("");
    }
    return (
        <div>
            {props.errors?props.errors.name.message:null}
            <form onSubmit={handelSubmit}>
                <label> {props.label1} </label>
                <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}></input>
                <input type="submit" value={props.submit}></input>
            </form>
        </div>
    )
}

export default Form;