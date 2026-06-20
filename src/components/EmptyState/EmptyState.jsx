import React from 'react';
import './EmptyState.css';

const EmptyState = ({ 
    icon = '📭', 
    title = 'Sin datos', 
    message = 'No hay información disponible.', 
    action,
    actionText 
}) => {
    return (
        <div className="empty-state">
            <span className="empty-state__icon">{icon}</span>
            <h3 className="empty-state__title">{title}</h3>
            <p className="empty-state__message">{message}</p>
            {action && actionText && (
                <button className="empty-state__action" onClick={action}>
                    {actionText}
                </button>
            )}
        </div>
    );
};

export default EmptyState;