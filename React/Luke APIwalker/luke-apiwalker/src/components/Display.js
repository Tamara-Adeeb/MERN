import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = ({search, id}) => {
    const [data,setData] = useState([]);
    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            setData(error.message);
        });
        
    },[search,id])
    return (
        <div>
            {
            search === "people"?<React.Fragment><h2>{data.name}</h2><p>{data.height}</p><p>{data.mass}</p><p>{data.hair_color}</p><p>{data.skin_color}</p></React.Fragment>
            :<React.Fragment><h2>{data.name}</h2><p>{data.climate}</p><p>{data.terrain}</p><p>{data.surface_water}</p><p>{data.population}</p></React.Fragment>
            }
        </div>
    )
}

export default Display
