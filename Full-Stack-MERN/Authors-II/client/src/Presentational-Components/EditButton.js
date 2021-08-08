import { navigate } from '@reach/router'
import React from 'react'

const EditButton = ({id}) => {
    const handelClick = () => {
        navigate(`/edit/${id}`);
    }
    return (
        <div>
            <button onClick={handelClick}> Edit </button>
        </div>
    )
}

export default EditButton
