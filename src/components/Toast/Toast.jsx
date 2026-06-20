import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, type = 'info', duration = 4000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    return (
        <div className={`toast toast--${type} ${isVisible ? 'toast--visible' : 'toast--hidden'}`}>
            <span className="toast__icon">{icons[type] || icons.info}</span>
            <span className="toast__message">{message}</span>
            <button className="toast__close" onClick={handleClose}>&times;</button>
        </div>
    );
};

export default Toast;