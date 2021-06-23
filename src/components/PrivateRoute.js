import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <Route {...rest}>
            {isLoading ? (
                <p>loading....</p>
            ) : isAuthenticated ? (
                children
            ) : (
                <Redirect to='/'></Redirect>
            )}
        </Route>
    );
};

export default PrivateRoute;
