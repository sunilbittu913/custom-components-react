import React, { useState } from 'react';

export interface StepperProps {
    /**
     * Current value
     */
    value?: number;
    /**
     * Default value (uncontrolled)
     */
    defaultValue?: number;
    /**
     * Callback when value changes
     */
    onChange?: (value: number) => void;
    /**
     * Minimum value
     */
    min?: number;
    /**
     * Maximum value
     */
    max?: number;
    /**
     * Step increment/decrement
     */
    step?: number;
    /**
     * Label for the stepper
     */
    label?: string;
    /**
     * Whether the stepper is disabled
     */
    disabled?: boolean;
    /**
     * Additional CSS classes for wrapper
     */
    className?: string;
}

/**
 * Stepper component for incrementing/decrementing numeric values
 */
export const Stepper: React.FC<StepperProps> = ({
    value,
    defaultValue = 0,
    onChange,
    min,
    max,
    step = 1,
    label,
    disabled = false,
    className = '',
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue);

    const currentValue = value !== undefined ? value : internalValue;

    const handleIncrement = () => {
        if (disabled) return;
        const newValue = currentValue + step;
        if (max === undefined || newValue <= max) {
            setInternalValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    };

    const handleDecrement = () => {
        if (disabled) return;
        const newValue = currentValue - step;
        if (min === undefined || newValue >= min) {
            setInternalValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    };

    const isDecrementDisabled = disabled || (min !== undefined && currentValue <= min);
    const isIncrementDisabled = disabled || (max !== undefined && currentValue >= max);

    return (
        <div className={`stepper-wrapper ${className}`.trim()}>
            {label && <label className="stepper-label">{label}</label>}
            <div className="stepper-container">
                <button
                    type="button"
                    className="stepper-button stepper-decrement"
                    onClick={handleDecrement}
                    disabled={isDecrementDisabled}
                    aria-label="Decrement"
                >
                    −
                </button>
                <span className="stepper-value">{currentValue}</span>
                <button
                    type="button"
                    className="stepper-button stepper-increment"
                    onClick={handleIncrement}
                    disabled={isIncrementDisabled}
                    aria-label="Increment"
                >
                    +
                </button>
            </div>
        </div>
    );
};
