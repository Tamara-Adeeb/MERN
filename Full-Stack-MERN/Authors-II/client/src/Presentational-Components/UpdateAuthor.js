import React, {useState,useEffect}from 'react'
import axios from 'axios';
import Form from './Form';

const UpdateAuthor = ({id}) => {
    const [author,setAuthor] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors,setErrors] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => {
            setAuthor(res.data);
            setIsLoaded(true);
        })
    })

    const update = name => {
        console.log(name)
        console.log(id)
        axios.put(`http://localhost:8000/api/author/${id}`, {
            name
        })
        .then((res) => console.log(res.data))
        .catch(err => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            {isLoaded && <Form onSubmit={update} errors={errors} author={author.name} label1="Name:" submit="Update Author"/>}
        </div>
    )
}

export default UpdateAuthor
