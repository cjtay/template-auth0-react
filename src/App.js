import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

function App() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    if (user) {
        console.log('user: ', user);
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Authentication template using Auth0</h1>
                {isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
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
                {user && (
                    <>
                        <div>Name: {user.name}</div>
                        <div>Email {user.email}</div>
                        <div>Role: {user.roles}</div>
                        <div>Nickname: {user.nickname}</div>
                        <img src={user.picture} alt='user' />
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
