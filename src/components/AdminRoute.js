import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AdminRoute = ({ children, ...rest }) => {
    const { isAuthenticated, isLoading, error, user } = useAuth0();

    //this is how to extract role from auth0 custom namespace
    let roles;
    let admin = true;
    if (user) {
        roles = user[`http://digitalfunnel/roles`];
        console.log('user role: ', roles);
        if (roles[0] !== 'Admin') {
            admin = false;
        }
    }

    return (
        <Route {...rest}>
            {isLoading ? (
                <p>loading....</p>
            ) : error ? (
                <p>error: {error}</p>
            ) : isAuthenticated && admin ? (
                children
            ) : (
                <Redirect to='/'></Redirect>
            )}
        </Route>
    );
};

export default AdminRoute;
