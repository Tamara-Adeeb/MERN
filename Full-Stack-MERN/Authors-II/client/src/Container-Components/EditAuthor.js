import React from 'react';
import UpdateAuthor from '../Presentational-Components/UpdateAuthor';
import Main from '../Presentational-Components/Main';

const EditAuthor = ({id}) => {
    return (
        <React.Fragment>
            <Main to="/" link="Home" subTitle="Edit this author:"/>
            <UpdateAuthor id={id}/>
        </React.Fragment>
    )
}

export default EditAuthor
