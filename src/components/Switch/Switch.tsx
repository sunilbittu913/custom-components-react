import React, { useState } from 'react';

export interface SwitchProps {
    /**
     * Whether the switch is checked
     */
    checked?: boolean;
    /**
     * Default checked state (uncontrolled)
     */
    defaultChecked?: boolean;
    /**
     * Callback when switch state changes
     */
    onChange?: (checked: boolean) => void;
    /**
     * Label for the switch
     */
    label?: string;
    /**
     * Whether the switch is disabled
     */
    disabled?: boolean;
    /**
     * Size of the switch
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Additional CSS classes for wrapper
     */
    className?: string;
}

/**
 * Switch component for toggling between on/off states
 */
export const Switch: React.FC<SwitchProps> = ({
    checked,
    defaultChecked = false,
    onChange,
    label,
    disabled = false,
    size = 'medium',
    className = '',
}) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = e.target.checked;
        setInternalChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    const switchId = label?.toLowerCase().replace(/\s+/g, '-') || 'switch';

    return (
        <div className={`switch-wrapper ${className}`.trim()}>
            <label className="switch-container" htmlFor={switchId}>
                <input
                    type="checkbox"
                    id={switchId}
                    className="switch-input"
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={disabled}
                />
                <span className={`switch-slider switch-${size} ${disabled ? 'switch-disabled' : ''}`}></span>
                {label && <span className="switch-label">{label}</span>}
            </label>
        </div>
    );
};
