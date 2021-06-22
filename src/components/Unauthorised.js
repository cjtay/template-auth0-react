import React from 'react';
import { Link } from 'react-router-dom';

export const Unauthorised = () => {
    return (
        <h1>
            You are not authorised to access this page. Please go to home page
            to login
            <Link to='/'>Home page</Link>
        </h1>
    );
};

export default Unauthorised;
