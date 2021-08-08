import React,{useState,useEffect} from 'react';
import axios from'axios';
import ListOfAuthors from '../Presentational-components/ListOfAuthors';
const AllAuthors = () => {
    const [Authors,setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err))
    })
    console.log(Authors);
    return (
        <div>
            <ListOfAuthors authors={Authors} />
        </div>
    )
}

export default AllAuthors
