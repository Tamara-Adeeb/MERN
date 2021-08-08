import React from 'react';
import { Link } from '@reach/router';

const PLayer = () => {
    return (
        <div>
            <Link to="player/list"> List </Link>
            <Link to="player/addplayer"> Add Player </Link>
        </div>
    )
}

export default PLayer
