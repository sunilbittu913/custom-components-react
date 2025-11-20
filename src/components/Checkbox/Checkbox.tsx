import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Checkbox label
     */
    label?: string;
    /**
     * Additional CSS classes for wrapper
     */
    wrapperClassName?: string;
}

/**
 * Checkbox component with label support
 */
export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    wrapperClassName = '',
    className = '',
    id,
    ...props
}) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const checkboxClassName = `checkbox-input ${className}`.trim();

    return (
        <div className={`checkbox-wrapper ${wrapperClassName}`.trim()}>
            <input
                type="checkbox"
                id={checkboxId}
                className={checkboxClassName}
                {...props}
            />
            {label && (
                <label htmlFor={checkboxId} className="checkbox-label">
                    {label}
                </label>
            )}
        </div>
    );
};
