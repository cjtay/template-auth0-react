import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {
    const { isLoading, isAuthenticated, loginWithRedirect, logout } =
        useAuth0();
    return (
        <div className='w-6/12 p-10 mx-auto my-20 bg-green-100 rounded'>
            <header className='flex-col text-center text-swa-1'>
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
                    <button
                        className='mt-5 btn-light'
                        onClick={loginWithRedirect}
                    >
                        Login
                    </button>
                )}
                <div className='block w-11/12 mx-auto mt-10 text-center bg-gray-500'>
                    <a
                        className='text-white'
                        href='https://auth0.com/docs/quickstart/spa/react'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Auth0 docs
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Landing;
