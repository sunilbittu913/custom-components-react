import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Input label
     */
    label?: string;
    /**
     * Helper text displayed below the input
     */
    helperText?: string;
    /**
     * Error message (displays error state)
     */
    error?: string;
    /**
     * Additional CSS classes for wrapper
     */
    wrapperClassName?: string;
}

/**
 * Input component with label, helper text, and error states
 */
export const Input: React.FC<InputProps> = ({
    label,
    helperText,
    error,
    wrapperClassName = '',
    className = '',
    id,
    ...props
}) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const inputClassName = `input-field ${error ? 'input-error' : ''} ${className}`.trim();

    return (
        <div className={`input-wrapper ${wrapperClassName}`.trim()}>
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                </label>
            )}
            <input id={inputId} className={inputClassName} {...props} />
            {error && <span className="input-error-text">{error}</span>}
            {!error && helperText && <span className="input-helper">{helperText}</span>}
        </div>
    );
};
