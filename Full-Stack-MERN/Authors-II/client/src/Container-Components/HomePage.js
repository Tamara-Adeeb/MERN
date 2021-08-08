import React from 'react';
import AllAuthors from '../Presentational-Components/AllAuthors';
import List from '../Presentational-Components/List';
import Main from '../Presentational-Components/Main';

const HomePage = () => {
    return (
        <React.Fragment>
            <Main to="/new" link="Add an author" subTitle="We have quotes by"/>
            <List h1="Author" h2="Actions Avalable" />
        </React.Fragment>
    )
}

export default HomePage
