import React from 'react';
import './NotFound.css';

const notFound = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c22704',
    height: '100vh'
}

const NotFound = () => {
    return (
        <div style={notFound}>
            <h1 className="fontStyle4O4">4O4</h1>
            <h2 className="fontStyle">
                Oops! Page not Found
            </h2>
        </div >
    );
};

export default NotFound;