import React, { useState } from 'react';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Slider label
     */
    label?: string;
    /**
     * Show current value
     */
    showValue?: boolean;
    /**
     * Value formatter function
     */
    valueFormatter?: (value: number) => string;
    /**
     * Additional CSS classes for wrapper
     */
    wrapperClassName?: string;
}

/**
 * Slider component for selecting a value from a range
 */
export const Slider: React.FC<SliderProps> = ({
    label,
    showValue = true,
    valueFormatter,
    wrapperClassName = '',
    className = '',
    min = 0,
    max = 100,
    value,
    defaultValue,
    onChange,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(
        defaultValue !== undefined ? Number(defaultValue) : Number(min)
    );

    const currentValue = value !== undefined ? Number(value) : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setInternalValue(newValue);
        if (onChange) {
            onChange(e);
        }
    };

    const displayValue = valueFormatter
        ? valueFormatter(currentValue)
        : currentValue.toString();

    return (
        <div className={`slider-wrapper ${wrapperClassName}`.trim()}>
            {label && (
                <div className="slider-header">
                    <label className="slider-label">{label}</label>
                    {showValue && <span className="slider-value">{displayValue}</span>}
                </div>
            )}
            <input
                type="range"
                className={`slider-input ${className}`.trim()}
                min={min}
                max={max}
                value={currentValue}
                onChange={handleChange}
                {...props}
            />
            <div className="slider-range">
                <span className="slider-min">{min}</span>
                <span className="slider-max">{max}</span>
            </div>
        </div>
    );
};
