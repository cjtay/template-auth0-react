import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

function App() {
    const { isLoading, isAuthenticated, user, loginWithRedirect, logout } =
        useAuth0();
    console.log('isAuthenticated: ', isAuthenticated);
    let roles;
    if (user) {
        roles = user[`http://localhost:3000/roles`];
        console.log('user: ', roles[0]);
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Authentication template using Auth0</h1>
                {isLoading ? (
                    <p>loading...</p>
                ) : !isLoading && isAuthenticated ? (
                    <>
                        <button onClick={logout}>Logout</button>
                        <p>Or go to:</p>
                        <Link to='/dashboard'>
                            <button>Dashboard</button>
                        </Link>
                    </>
                ) : (
                    <button onClick={loginWithRedirect}>Login</button>
                )}

                <a
                    className='App-link'
                    href='https://auth0.com/docs/quickstart/spa/react'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Auth0 docs
                </a>
            </header>
        </div>
    );
}

export default App;
