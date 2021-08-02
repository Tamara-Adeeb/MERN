import logo from './logo.svg';
import './App.css';
import Routing from './components/Routing';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Routing path="/home" variable="Welcome" />
        <Routing path="/:variable"/>
        <Routing path="/:variable/:color1/:color2"/>
        {/* <Routing path="/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
