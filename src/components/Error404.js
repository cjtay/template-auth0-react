import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            Page Not Found
            <Link to='/'>
                <button>Home Page</button>
            </Link>
        </div>
    );
};

export default Error404;
