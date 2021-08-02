import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const[title,setTitle] = useState("");
    const[price,setPrice] = useState("");
    const[description,setDescription] = useState("");


    const handelSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product',
        {title,
        price,
        description})
        .then(response => console.log(response))
        .catch(err => console.log(err));
        setTitle("");
        setPrice("");
        setDescription(""); 
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Price</label>
                <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                <label>Description</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm
