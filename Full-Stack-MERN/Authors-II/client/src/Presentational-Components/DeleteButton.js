import React from 'react';
import axios from'axios';

const DeleteButton = ({id,onDelete}) => {

    const deleteData = () => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            onDelete(id);
        })
        
        
        
    };
    return (
        <div>
            <button onClick={deleteData} >Delete</button>
        </div>
    )
}

export default DeleteButton
