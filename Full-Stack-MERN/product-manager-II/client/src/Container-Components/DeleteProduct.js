import React from 'react';
import axios from'axios';
import { Button } from '@material-ui/core';

const DeleteProduct = props => {
    
    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/'+props.productId)
        .then(responce => console.log(responce))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <button  color="primary" onClick={deleteProduct}>Delete Product</button>
        </div>
    )
}

export default DeleteProduct
