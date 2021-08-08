import React from 'react';
import axios from'axios';
const Delete = ({id}) => {
    console.log(id);
    const deleteA = () => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then(res => console.log(id))
    };
    return (
        <div>
            <button onClick={deleteA}>Delete</button>
        </div>
    )
}

export default Delete
