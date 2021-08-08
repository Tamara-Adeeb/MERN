
import './App.css';
import React,{useState} from 'react';
import { Router } from '@reach/router';
import Game1 from './components/Game1';
import Home from './views/Home';
import List from './components/List';
import CreatePlayer from './components/CreatePlayer';

function App() {
  const [players, setPlayers] = useState([]);

  const playerList = list => {
    console.log(list)
    setPlayers(players.concat(list));
  }
  
  return (
    <div className="App">
      <Home/>
      <Router>
      <List default path="players/list" passList={playerList}/>
      <CreatePlayer path ="players/addplayer"/>
      <Game1 data={players} path="status/game/1"/>
      </Router>
    </div>
  );
}

export default App;
