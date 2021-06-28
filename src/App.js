import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Logout from './components/LogoutPage';
import Unauthorised from './components/Unauthorised';
import Error404 from './components/Error404';
import PrivatePage from './components/PrivatePage';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import { FetchProvider } from './context/FetchContext';

import './tailwind.css';

function App() {
    const requestedScopes = [
        'read:data',
        'write:data',
        'delete:data',
        'update:data',
    ];

    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri='http://localhost:3000/dashboard'
            audience={process.env.REACT_APP_AUTH0_AUDIENCE}
            scope={requestedScopes.join(' ')}
        >
            <FetchProvider>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Landing />
                        </Route>
                        <AdminRoute exact path='/dashboard'>
                            <Dashboard />
                        </AdminRoute>
                        <PrivateRoute exact path='/private'>
                            <PrivatePage />
                        </PrivateRoute>
                        <Route exact path='/logout'>
                            <Logout />
                        </Route>
                        <Route exact path='/unauthorised'>
                            <Unauthorised />
                        </Route>
                        <Route exact path='*'>
                            <Error404 />
                        </Route>
                    </Switch>
                </Router>
            </FetchProvider>
        </Auth0Provider>
    );
}

export default App;
