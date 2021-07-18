import logo from './logo.svg';
import './App.css';
import ColorForm from './components/ColorForm';
import react, { useState } from 'react';
import DisplayColor from './components/DisplayColor';


function App() {
  const  [generated, setGenerated] = useState([]);

  const generateBox = (boxs) => {
    setGenerated(generated.concat(boxs));
  }
  return (
    <div className="App">
      <ColorForm createBox={generateBox} />
      <DisplayColor asd={generated}/>
    </div>
  );
}

export default App;
