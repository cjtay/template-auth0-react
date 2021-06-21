import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

function App() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Authentication template using Auth0</h1>
                <p onClick={loginWithRedirect}>Login</p>
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
