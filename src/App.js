import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Logout from './components/LogoutPage';
import Unauthorised from './components/Unauthorised';
import Error404 from './components/Error404';
import PrivateRoute from './components/PrivateRoute';

import { FetchProvider } from './context/FetchContext'

import './tailwind.css';

function App() {
    const { isAuthenticated, user } = useAuth0();
    console.log('isAuthenticated: ', isAuthenticated);
    let roles;
    if (user) {
        roles = user[`http://localhost:3000/roles`];
        console.log('user: ', roles[0]);
    }

    return (
        <Auth0Provider
            domain='dev-kcs-n29r.au.auth0.com'
            clientId='kq77Q978g7x21DZb27VND7jLZqw4J4e4'
            redirectUri='http://localhost:3000/dashboard'
            audience='http://localhost:3001/api'
        >
            <FetchProvider>

            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Landing />
                    </Route>
                    <PrivateRoute exact path='/dashboard'>
                        <Dashboard />
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
