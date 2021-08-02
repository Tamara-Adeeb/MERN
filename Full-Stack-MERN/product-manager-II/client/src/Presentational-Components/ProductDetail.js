import React from 'react'


const ProductDetail = ({selectedProduct}) => {
    return (
        <div>
            <p>{selectedProduct.title}</p>
            <p>{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
        </div>
    )
}

export default ProductDetail;
