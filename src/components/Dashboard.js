import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
    const [accessToken, setAccessToken] = useState();
    const { user, isAuthenticated, logout, isLoading, getAccessTokenSilently } =
        useAuth0();
    let roles;
    if (user) {
        roles = user[`http://localhost:3000/roles`];
        console.log('user role: ', roles);
    }

    const getAccessToken = useCallback(async () => {
        try {
            if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                setAccessToken(token);
                console.log('token silently: ', token);
            }
        } catch (err) {
            console.log(err);
        }
        // eslint-disable-next-line
    }, [getAccessTokenSilently]);

    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {isLoading ? (
                <h2>Loading ......</h2>
            ) : (
                <>
                    <h2>Dashboard Component</h2>
                    {!isAuthenticated && (
                        <>
                            <h2>
                                You are not login, please return to main page
                            </h2>
                            <Link to='/'>Go Home</Link>
                        </>
                    )}
                    {isAuthenticated && user && (
                        <>
                            <div>Name: {user.name}</div>
                            <div>Email {user.email}</div>
                            <div>Role: {roles[0]}</div>
                            <div>Nickname: {user.nickname}</div>
                            <img src={user.picture} alt='user' />
                            <div>Access Token: {accessToken}</div>
                            <div>
                                <button
                                    onClick={() => {
                                        logout({
                                            returnTo:
                                                'http://localhost:3000/logout',
                                        });
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Dashboard;
