import './App.css';
import ProductForm from './components/ProductForm';
import {Router} from '@reach/router';
import DisplayProducts from './components/DisplayProducts';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/product/asd"/>
        <DisplayProducts path="/product" />
        <ProductDetail path="/asd/:id"/>
      </Router>
    </div>
  );
}

export default App;
