// import axios from 'axios';
// import React,{useState,useEffect} from 'react';
// import PlayerList from './PlayerList';

// const AllPlayers = () => {
//     const [players, setPlayers] = useState([]);

//     useEffect(()=> {
//         axios.get('http://localhost:8000/api/player')
//         .then(res => {
//             setPlayers(res.data)
//             console.log(res.date)
//         })
//         .catch(err => console.log(err))
//     },[])

//     return (
//         <div>
//             <PlayerList player={players}/>
//         </div>
//     )
// }

// export default AllPlayers
