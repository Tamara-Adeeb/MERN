
import React, {useState, useEffect} from 'react';
import './App.css';
import StarWar from './components/StarWar';
import { Router } from '@reach/router';
import Display from './components/Display';


function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    console.log(data);
  } , [data])

  const passData = (starWar) => {
    setData(starWar);
  }
  return (
    <div className="App">
      <StarWar star={passData}/>
      <Router>
        <Display path="/:search/:id"/>
      </Router>
    </div>
  );
}

export default App;
