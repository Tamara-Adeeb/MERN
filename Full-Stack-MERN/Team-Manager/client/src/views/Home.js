import React from 'react';
import { Link } from '@reach/router';


const Home = () => {
    return (
        <div>
            <Link to="/players"> Manage Players </Link>
            <Link to="/status"> Manage Player Status </Link>
        </div>
    )
}

export default Home
