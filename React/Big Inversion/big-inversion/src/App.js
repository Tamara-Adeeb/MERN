import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ali" lastName="Adeeb" age={21} hairColor="brown"/>
      <PersonCard firstName="Adeeb" lastName="Adeeb" age={24} hairColor="brown"/>
    </div>
  );
}

export default App;
