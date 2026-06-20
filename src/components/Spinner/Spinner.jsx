import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 'md', color = 'primary', message = '' }) => {
    return (
        <div className={`spinner spinner--${size} spinner--${color}`}>
            <div className="spinner__circle"></div>
            {message && <span className="spinner__message">{message}</span>}
        </div>
    );
};

export default Spinner;