import React from 'react'
import CreateAuthor from '../Presentational-Components/CreateAuthor'
import Main from '../Presentational-Components/Main'

const AddAuthor = () => {
    return (
        <React.Fragment>
            <Main to="/" link="Home" subTitle="Add a new author:"/>
            <CreateAuthor/>
        </React.Fragment>
    )
}

export default AddAuthor
