import './App.css';
import { Router } from '@reach/router';
import AddAuthor from './Container-Components/AddAuthor';
import HomePage from './Container-Components/HomePage';
import EditAuthor from './Container-Components/EditAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/"/>
        <AddAuthor path="/new"/>
        <EditAuthor path="/edit/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
