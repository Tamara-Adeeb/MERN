import React from 'react';
import Form from '../Presentational-components/Form';
import axios from'axios';

const UpdateAuthor = ({id}) => { 

    const update = name => {
        axios.put('http://localhost:8000/api/author',id)
    }

    return (
        <div>
            <Form onSubmit={update}/>
        </div>
    )
}

export default UpdateAuthor;
