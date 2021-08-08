import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Player } from '../../../server/models/player.model';
import Delete from './Delete';


const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/player')
        .then(res => {
            setPlayers(res.data)
            console.log(res.date)
        })
        .catch(err => console.log(err))
    },[])

    const deleteData = id => {
        setPlayers(players.filter(players => players._id !== id))
    }

    return (
        <div>
            
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Action</th>
                </tr>
                {players.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <tr>
                                <td>{item.teamName}</td>
                                <td>{item.preferredPosition}</td>
                                <td><Delete id={item._id} onDelete={deleteData}/></td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </table>
        </div>
    )
}

export default PlayerList
