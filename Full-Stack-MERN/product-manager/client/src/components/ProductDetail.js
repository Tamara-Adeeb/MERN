import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ProductDetail = (props) => {
    const [product,setProduct] = useState({});
    console.log(props.id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${props.id}`)
        .then(response => {
            setProduct(response.data)
            console.log(response.data)
        })
        .catch(err => console.log(err.message))

    },[props.id])
    
    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail
