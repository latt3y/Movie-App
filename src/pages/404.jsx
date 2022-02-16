import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    const style = {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={style}>
            <h1 style={{color: 'white', marginBottom: '1rem'}} >404 Page Not Found</h1>
            <button 
                onClick={() => navigate('/')} 
                style={{ border: 'none', padding: '5px 30px', borderRadius: '5px' }}
            >
                Go Back
            </button>
        </div>
    )
};

export default ErrorPage;