
import './App.css';
import { Router } from 'express';
import CreateComponent from './Container-Components/CreateComponent';
import UpdateProduct from './Container-Components/UpdateProduct';
import ProductDetail from './Presentational-Components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <CreateComponent path="/"/>
        <UpdateProduct path="/product/:id"/>
      </Router>
    </div>
  );
}

export default App;
