import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Radio button label
     */
    label?: string;
    /**
     * Additional CSS classes for wrapper
     */
    wrapperClassName?: string;
}

/**
 * Radio button component
 */
export const Radio: React.FC<RadioProps> = ({
    label,
    wrapperClassName = '',
    className = '',
    id,
    ...props
}) => {
    const radioId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const radioClassName = `radio-input ${className}`.trim();

    return (
        <div className={`radio-wrapper ${wrapperClassName}`.trim()}>
            <input
                type="radio"
                id={radioId}
                className={radioClassName}
                {...props}
            />
            {label && (
                <label htmlFor={radioId} className="radio-label">
                    {label}
                </label>
            )}
        </div>
    );
};

export interface RadioGroupProps {
    /**
     * Name for the radio group
     */
    name: string;
    /**
     * Radio options
     */
    options: Array<{ value: string; label: string; disabled?: boolean }>;
    /**
     * Selected value
     */
    value?: string;
    /**
     * Change handler
     */
    onChange?: (value: string) => void;
    /**
     * Group label
     */
    label?: string;
    /**
     * Additional CSS classes for wrapper
     */
    className?: string;
}

/**
 * RadioGroup component for managing multiple radio buttons
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
    name,
    options,
    value,
    onChange,
    label,
    className = '',
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={`radio-group ${className}`.trim()}>
            {label && <div className="radio-group-label">{label}</div>}
            <div className="radio-group-options">
                {options.map((option) => (
                    <Radio
                        key={option.value}
                        name={name}
                        value={option.value}
                        label={option.label}
                        checked={value === option.value}
                        onChange={handleChange}
                        disabled={option.disabled}
                    />
                ))}
            </div>
        </div>
    );
};
