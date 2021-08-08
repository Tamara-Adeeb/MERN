import React from 'react'
import {navigate} from '@reach/router';

const Edit = ({id}) => {
    
    const moveTo = () =>{
        navigate(`/edit/${id}`)
    }
    return (
        <div>
            <button onClick={moveTo}>Edit</button>
        </div>
    )
}

export default Edit
