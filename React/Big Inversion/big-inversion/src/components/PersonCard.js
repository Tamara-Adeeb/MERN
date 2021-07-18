import React from 'react';

const PersonCard = (props) =>{
    const {firstName, lastName, age , hairColor}=props;
    return(
        <>
        <h2> {firstName}, {lastName} </h2>
        <p>Age: {age}</p>
        <p> Hair Color: {hairColor}</p>
        </>
    )
}
export default PersonCard;