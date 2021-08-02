import React from 'react';
import { Link } from '@reach/router';
import DeleteProduct from '../Container-Components/DeleteProduct';

const ProductList = ({products}) => {
    return (
        <div>
            {products.map(item => {
                return(
                    <React.Fragment key={item._id}>
                        <Link to={`/product/${item._id}`}> {item.title} </Link>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                        <DeleteProduct productId={item._id}/>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default ProductList
