import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Game1 = ({data,Gid}) => {
    const [green, setGreen] = useState("");
    const [red, setRed] = useState("");
    const [yellow, setYellow] = useState("yellow");
    const [players, setPlayers] = useState([]);
    
    const Game = ["Game1","Game2","Game3"];
    const selectedGame = Game[Gid-1];

    useEffect(()=> {
        axios.get('http://localhost:8000/api/player')
        .then(res => {
            setPlayers(res.data)
            console.log(res.date)
        })
        .catch(err => console.log(err))
    },[])

    const playing = (id,selectedGame) =>{
        axios.put(`http://localhost:8000/api/player/${id}`, {
            selectedGame:"playing"
        })
        .then(res => {
            console.log(res)
            setGreen("green");
            setRed("");
            setYellow("");
        })
        .catch(err => console.log(err.message))
    }

    const notPlaying = id => {
        axios.put(`http://localhost:8000/api/player/${id}`, {
            selectedGame:"not playing"
        })
        .then(res => {
            console.log(res)
            setGreen("");
            setRed("red");
            setYellow("");
        })
        .catch(err => console.log(err.message))
    }

    const undecided = id => {
        axios.put(`http://localhost:8000/api/player/${id}`, {
            selectedGame:"Undecided"
        })
        .then(res => {
            console.log(res);
            setGreen("");
            setRed("");
            setYellow("yellow");
        })
        .catch(err => console.log(err.message))
    }
    return (
        <div>
            {console.log(data)}
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Action</th>
                </tr>
                {players.map(item => {
                    return (
                        <React.Fragment key={item._id}>
                            <tr>
                                <td>{item.teamName}</td>
                                <td> 
                                    <button style={{backgroundColor:green}} onClick={e => playing(item._id,selectedGame)}>Playing</button>
                                    <button style={{backgroundColor:red}} onClick={e => notPlaying(item._id,selectedGame)}>Not Playing</button>
                                    <button style={{backgroundColor:yellow}} onClick={e => undecided(item._id,selectedGame)}>Undecided</button>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                })}
            </table>
        </div>
    )
}

export default Game1
