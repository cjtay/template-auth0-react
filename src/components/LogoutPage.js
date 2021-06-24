import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutPage = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log('user info: ', user);
    console.log('isAuthenticated: ', isAuthenticated);
    return (
        <>
            <h1>This is a logout page</h1>
            {user ? <p>There is user info</p> : <p>There is no user info</p>}
            <p>see console log for details</p>
            <Link to='/'>
                <button className='btn-dark'>Go Home</button>
            </Link>
        </>
    );
};

export default LogoutPage;
