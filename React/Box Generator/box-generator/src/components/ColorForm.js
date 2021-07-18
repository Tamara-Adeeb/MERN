import react, { useState } from 'react';

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const boxs = [];
    const handelSubmit = (e) => {
        e.preventDefault();
        const widthOf = width+"px";
        const heightOf = height+"px";
        const box = {color,widthOf,heightOf};
        boxs.push(box);
        props.createBox(boxs);
        setColor("");
        setHeight("");
        setWidth("");
    }
    return (
        <>
        <form onSubmit={handelSubmit}>
            <label> Choose Color </label>
            <input type="text" value={color} onChange={ e => setColor(e.target.value)} />
            <input type="text" value={width} onChange={e => setWidth(e.target.value)} />
            <input type="text" value={height} onChange={e => setHeight(e.target.value)} />
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}
export default ColorForm;