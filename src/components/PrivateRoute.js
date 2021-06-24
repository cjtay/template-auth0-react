import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
    const { isAuthenticated, isLoading, error } = useAuth0();

    return (
        <Route {...rest}>
            {isLoading ? (
                <p>loading....</p>
            ) : error ? (
                <p>error: {error}</p>
            ) : isAuthenticated ? (
                children
            ) : (
                <Redirect to='/'></Redirect>
            )}
        </Route>
    );
};

export default PrivateRoute;
