import React, {useState} from 'react';
import { navigate } from '@reach/router'
import axios from 'axios';

const CreatePlayer = () => {
    const [name,setName] = useState("");
    const [position,setPosition] = useState("");
    const [errorName,setErrorName] = useState("");
    const [errorPosition,setErrorPosition] = useState("");
    const input = document.getElementById("submit");
    

    const handelSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(position);
        axios.post('http://localhost:8000/api/player',{
            teamName:name,
            preferredPosition:position
        })
        .then(res => {
            console.log(res);
            // navigate("/")
        })
    }
    const changeName = e => {
        setName(e.target.value);
        if((e.target.value).length < 2 ){
            setErrorName("Name shoul be more then 2")
            
        }
        else{
            setErrorName("")
            input.disabled = false
        }
        
    }
    const changePosition = e => {
        setPosition(e.target.value);
        if((e.target.value).length < 2 ){
            setErrorPosition("Position shoul be more then 2")
            }
            else{
                setErrorPosition("")
                input.disabled = false
            }
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label> Player Name</label>
                {errorName?<p>{errorName}</p>:null}
                <input 
                type="text"
                value={name}
                onChange={changeName}/>
                <label> Player Position</label>
                {errorPosition?<p>{errorPosition}</p>:null}
                <input 
                type="text"
                value={position}
                onChange={changePosition}/>
                {/* {(errorName.length > 0  && errorPosition.length >0) ? input.disabled=true : input.disabled = false } */}
                <input id="submit" type="submit" value="Add" disabled={true} />
            </form>
        </div>
    )
}

export default CreatePlayer
