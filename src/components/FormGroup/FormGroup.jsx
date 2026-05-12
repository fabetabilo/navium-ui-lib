import React from 'react';
import './FormGroup.css';

const FormGroup = ({
    label,
    id,
    required = false,
    error = false,
    helperText,
    children,
    className = '',
}) => {
    const helperId = helperText ? `${id}-help` : undefined;

    return (
        <div className={`form-group ${className}`.trim()}>
            {label ? (
            <label className="label" htmlFor={id}>
            {label}{required ? ' *' : ''}
            </label>
        ) : null}

        {React.cloneElement(children, {
            id,
            className: `input ${children.props.className || ''}`.trim(),
            'aria-invalid': error || undefined,
            'aria-describedby': helperId,
        })}

        {helperText ? (
            <div id={helperId} className={`helper-text ${error ? 'helper-text--error' : ''}`.trim()}>
                {helperText}
            </div>
        ) : null}
        </div>
    );
};

export default FormGroup;