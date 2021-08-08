
import './App.css';
import AllAuthors from './Container-components/AllAuthors';
import UpdateAuthor from './Container-components/UpdateAuthor';
import { Router } from '@reach/router';
import CreateAuthor from './Container-components/CreateAuthor';


function App() {
  return (
    <div className="App">
      <Router>
      <AllAuthors path="/"/>
      <UpdateAuthor path="/edit/:id"/>
      <CreateAuthor path='/create'/>
      </Router>
    </div>
  );
}

export default App;
