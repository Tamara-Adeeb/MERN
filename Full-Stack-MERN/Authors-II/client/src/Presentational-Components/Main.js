import { Link } from '@reach/router';
import React from 'react';

const Main = props => {

    return (
        <React.Fragment>
            <h1>Favorite authors</h1>
            <Link to={props.to} > {props.link} </Link>
            <h3>{props.subTitle}</h3>
        </React.Fragment>
    )
}

export default Main
