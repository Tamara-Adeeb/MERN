import React,{useState} from 'react'

const ProductForm = props => {
    const [title,setTitle] = useState(props.titlep);
    const[price,setPrice] = useState(props.pricep);
    const[description,setDescription] = useState(props.descriptionp);

    const handelSubmit = e =>{
        e.preventDefault();
        props.onSubmit({title,price,description})
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
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ProductForm
