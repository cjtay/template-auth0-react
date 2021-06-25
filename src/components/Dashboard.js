import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {FetchContext} from '../context/FetchContext'

const Dashboard = () => {
    const fetchContext = useContext(FetchContext)

    const { user, isAuthenticated, logout, isLoading } =
        useAuth0();
    let roles;
    if (user) {
        roles = user[`http://localhost:3000/roles`];
        console.log('user role: ', roles);
    }


    return (
        <>
            {isLoading ? (
                <h2>Loading ......</h2>
            ) : (
                <>
                    <h2 className='px-5 py-2 text-center bg-gray-200'>
                        Dashboard Component
                    </h2>
                    {!isAuthenticated && (
                        <>
                            <h2 className='p-4 bg-red-500'>
                                You are not login, please return to main page
                            </h2>
                            <Link to='/'>Go Home</Link>
                        </>
                    )}
                    {isAuthenticated && user && (
                        <div className='w-6/12 p-3 mx-auto my-5 bg-green-100'>
                            <div>
                                <span className='font-bold'>Name: </span>
                                {user.name}
                            </div>
                            <div>
                                <span className='font-bold'>Email: </span>
                                {user.email}
                            </div>
                            <div>
                                <span className='font-bold'>Role: </span>
                                {roles[0]}
                            </div>
                            <div>
                                <span className='font-bold'>Nickname: </span>
                                {user.nickname}
                            </div>
                            <img
                                className='my-3'
                                src={user.picture}
                                alt='user'
                            />
                            <div className='overflow-scroll'>
                                <span className='font-bold'>
                                    Access Token:{' '}
                                </span>
                                {fetchContext.accessToken}
                            </div>
                            <div>
                                <button
                                    className='btn-dark'
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
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Dashboard;
