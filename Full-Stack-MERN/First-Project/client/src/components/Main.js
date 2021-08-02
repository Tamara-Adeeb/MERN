import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Main = ({word}) => {
    const [message,setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get(`http:localhost:8000/api/${word}`)
        .then(res => setMessage(res.data.message))
        .catch(err => console.log(err.message))
    })
    return (
        <div>
            <h1> Our First Word : {message}</h1>
        </div>
    )
}

export default Main
