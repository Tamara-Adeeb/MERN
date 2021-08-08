import axios from 'axios';
import React,{useState} from 'react';
import ManagePlayer from './ManagePlayer';

const CreatePlayer = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState(false);
    const input = document.getElementById("submit")

    const handelSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(position);
        axios.post(`http://localhost:8000/api/player`,{
            teamName:name,
            preferredPosition:position
        })
        .then(res => console.log(res))
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)})
        setName("");
        setPosition("");
    }

    return (
        <div>
            <ManagePlayer/>
            {errors?errors.teamName.message:null}
            <form onSubmit={handelSubmit}>
                <label>Player Name: </label>
                <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
                <label>Prefferd Name: </label>
                <input
                type="text"
                value={position}
                onChange={e => setPosition(e.target.value)}/>
                {/* {errors? input.disabled=true:input.disabled=false} */}
                <input id="submit" type="submit" value="Add Player" />
            </form>
        </div>
    )
}

export default CreatePlayer
