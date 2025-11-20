import React, { useState } from 'react';

export interface SegmentedControlOption {
    /**
     * Option value
     */
    value: string;
    /**
     * Option label
     */
    label: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
}

export interface SegmentedControlProps {
    /**
     * Array of options
     */
    options: SegmentedControlOption[];
    /**
     * Selected value
     */
    value?: string;
    /**
     * Default value
     */
    defaultValue?: string;
    /**
     * Callback when value changes
     */
    onChange?: (value: string) => void;
    /**
     * Full width
     */
    block?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Segmented Control component for mutually exclusive options
 */
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
    options,
    value,
    defaultValue,
    onChange,
    block = false,
    className = '',
}) => {
    const [internalValue, setInternalValue] = useState(
        defaultValue || options[0]?.value || ''
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleSelect = (optionValue: string, disabled?: boolean) => {
        if (disabled) return;

        setInternalValue(optionValue);
        if (onChange) {
            onChange(optionValue);
        }
    };

    return (
        <div
            className={`segmented-control ${block ? 'segmented-control-block' : ''} ${className}`.trim()}
            role="radiogroup"
        >
            {options.map((option) => (
                <button
                    key={option.value}
                    className={`segmented-control-option ${currentValue === option.value ? 'segmented-control-option-active' : ''
                        } ${option.disabled ? 'segmented-control-option-disabled' : ''}`.trim()}
                    onClick={() => handleSelect(option.value, option.disabled)}
                    role="radio"
                    aria-checked={currentValue === option.value}
                    disabled={option.disabled}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};
