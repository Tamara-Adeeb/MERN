import axios from 'axios';
import React,{useState,useEffect} from 'react';
import DeleteButton from './DeleteButton';
import ManagePlayer from './ManagePlayer';

const List = props => {
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/player')
        .then(res => {
            setPlayers(res.data)
            console.log(res.date)
            

        })
        .catch(err => console.log(err))
    },[])
    
    props.passList(players);
    const deleteData = id => {
        setPlayers(players.filter(players => players._id !== id))
    }

    return (
        <div>
            <ManagePlayer/>
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
                                <td><DeleteButton id={item._id} onDelete={deleteData}/></td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </table>
        </div>
    )
}

export default List
