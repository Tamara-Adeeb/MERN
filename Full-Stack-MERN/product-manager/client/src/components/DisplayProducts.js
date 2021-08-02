import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const DisplayProducts = () => {
    const[products,setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(response => setProducts(response.data))
        .catch(err => console.log(err.message))
    })
    console.log(products);
    return (
        <div>
            <h2> All Products: </h2>
            {products.map(item => {
                return (<div key={item._id}>
                    <Link to={`/${item._id}`} > {item.title} </Link>
                </div>)
            } )}
        </div>
    )
}

export default DisplayProducts
