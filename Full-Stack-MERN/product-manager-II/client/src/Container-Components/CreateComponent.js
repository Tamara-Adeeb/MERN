import React,{useEffect,useState} from 'react';
import ProductForm from '../Presentational-Components/ProductForm';
import axios from 'axios';
import ProductList from '../Presentational-Components/ProductList';

const CreateComponent = props => {
    const [products,setProducts] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(responce => {
            setProducts(responce.data);
            setIsLoaded(true);
        })
        .catch(err => console.log(err.message))
    })

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products',product)
        .then(responce => {
            console.log(responce);
            setIsLoaded(true);
        })
        .catch(error => console.log("asdasd"+error.message))
    }

    return (
        <div>
            <ProductForm onSubmit={createProduct} titlep="" pricep="" descriptionp=""/>
            {isLoaded && <ProductList products={products} />}
            
        </div>
    )
}

export default CreateComponent
