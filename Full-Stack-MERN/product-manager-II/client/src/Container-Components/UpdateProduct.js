import React, {useState,useEffect}from 'react';
import axios from'axios';
import ProductForm from '../Presentational-Components/ProductForm';
import ProductDetail from '../Presentational-Components/ProductDetail';

const UpdateProduct = props => {
    const { id } = props;
    const [product,setProduct] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');

    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then(responce => {
            setProduct(responce.data)
            setIsLoaded(true);
        })
    }, [])

    const updateProduct = (products) => {
        products.id = id;
        axios.put('http://localhost:8000/api/product/'+id, products)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <ProductForm onSubmit={updateProduct} titlep={product.title} pricep={product.price} descriptionp={product.description}/>
            { isLoaded && <ProductDetail selectedProduct={product}/>}
        </div>
    )
}

export default UpdateProduct
