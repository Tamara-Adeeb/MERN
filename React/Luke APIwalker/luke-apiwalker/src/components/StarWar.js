import React, {useState} from 'react';

import { navigate } from '@reach/router';

const StarWar = (props) => {
    const [search,setSearch] = useState("people");
    const [id,setId] = useState("");

    const handelSubmit = e => {
        e.preventDefault();
        navigate(`/${search}/${id}`);
        
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                Search For: <select value={search} onChange={e => setSearch(e.target.value) }>
                    <option value="people"> people</option>
                    <option value="planets"> planets</option>
                </select>
                ID: <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default StarWar
