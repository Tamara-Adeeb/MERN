import React from 'react';
import { Link } from '@reach/router';

const ManagerPlayer = () => {
    return (
        <div>
            <Link to="player"> Manager Player </Link>
            <Link to="status/game/1"> Manager Player Status </Link>
        </div>
    )
}

export default ManagerPlayer
