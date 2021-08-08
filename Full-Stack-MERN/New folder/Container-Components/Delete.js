import React from 'react';
import axios from 'axios';

const Delete = ({id,onDelete}) => {

    const handleDelete = () =>{
        axios.delete(`http://localhost:8000/api/player/${id}`)
        .then(() => onDelete(id))
    }

    return (
        <div>
            <button onClick={handleDelete} style={{backgroundColor:"red"}}>Delete</button>
        </div>
    )
}

export default Delete
