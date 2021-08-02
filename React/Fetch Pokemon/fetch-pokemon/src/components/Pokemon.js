import React , {useState}from 'react';

const Pokemon = () => {
    const [name,setName] = useState([]);
    const [error,setError] = useState(null);

    const handelClick = e => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(response => setName(response.results))
        .catch(error => setError(error.message))
    }

    return (
        <React.Fragment>
            <button onClick={handelClick} value="Fetch Pokemon"> Fetch Pokemon</button>
            <ul>
            {name.map((item,index) => <li key={index}>{item.name}</li>)}
            </ul>
            
            {error? <p>{error}</p>:null}
        </React.Fragment>
    )
}

export default Pokemon
