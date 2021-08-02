import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);

    const handelClick = e => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => setData(response.data.results))
        .catch(error => setError(error.message))
    }
    return (
        <React.Fragment>
            <button onClick={handelClick} value="Fetch Pokemon"> Fetch Pokemon</button>
            <ul>
            {data.map((item,index) => <li key={index}>{item.name}</li>)}
            </ul>
            
            {error? <p>{error}</p>:null}
        </React.Fragment>
    )
}

export default Pokemon
