import React,{useState, useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from'axios';
import Form from './Form';

const CreateAuthor = () => {
    const [errors,setErrors] = useState(false)

    const setName = name => {
        
        axios.post("http://localhost:8000/api/author", {name})
        .then(result => console.log(result))
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)

        });
    }

    return (
        <div>
            <Form onSubmit={setName} errors={errors} author="" label1="Name:" submit="Add Author"/>
        </div>
    )
}

export default CreateAuthor