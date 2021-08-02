import logo from './logo.svg';
import './App.css';
import ToAdd from './components/ToAdd';
import DisplayToDo from './components/DisplayToDo';
import React, {useState} from 'react';


function App() {
const [contantToDo,setContantToDo] = useState([]);
const addContantToDo = (contant) =>{
  setContantToDo(contantToDo.concat(contant))
}
  return (
    <div className="App">
      <ToAdd contant={addContantToDo} />
      <DisplayToDo displayContant={contantToDo}/>
    </div>
  );
}

export default App;
