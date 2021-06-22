import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App';
import Dashboard from './components/Dashboard';
import Logout from './components/LogoutPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-kcs-n29r.au.auth0.com'
            clientId='kq77Q978g7x21DZb27VND7jLZqw4J4e4'
            redirectUri='http://localhost:3000/dashboard'
        >
            <Router>
                <Route exact path='/'>
                    <App />
                </Route>
                <Route exact path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route exact path='/logout'>
                    <Logout />
                </Route>
            </Router>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
