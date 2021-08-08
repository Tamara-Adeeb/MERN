import React,{useState} from 'react';
import Form from '../Presentational-components/Form';
import axios from'axios';

const CreateAuthor = props => {
    // const [isLoaded,setIsLoaded] = useState(true);
    const create = name => {
        axios.post('http://localhost:8000/api/author',name)
    }
    return (
        <div>
            <Form onSubmit={create}/>
        </div>
    )
}

export default CreateAuthor
