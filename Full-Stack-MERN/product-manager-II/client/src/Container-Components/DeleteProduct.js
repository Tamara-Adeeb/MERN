import React from 'react';
import axios from'axios';
import { Button } from '@material-ui/core';

const DeleteProduct = ({product_id}) => {

    const deleteProduct = product_id => {
        axios.delete('http://localhost:8000/api/product',product_id)
        .then(responce => console.log(responce))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Button  color="primary" onClick={deleteProduct}>Delete Product</Button>
        </div>
    )
}

export default DeleteProduct
