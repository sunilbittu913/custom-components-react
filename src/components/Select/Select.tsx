import React, { useState, useRef, useEffect } from 'react';

export interface SelectOption {
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

export interface SelectProps {
    /**
     * Select options
     */
    options: SelectOption[];
    /**
     * Selected value
     */
    value?: string;
    /**
     * Default value
     */
    defaultValue?: string;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Callback when value changes
     */
    onChange?: (value: string) => void;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Label for the select
     */
    label?: string;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Select component for choosing from options
 */
export const Select: React.FC<SelectProps> = ({
    options,
    value,
    defaultValue,
    placeholder = 'Select an option',
    onChange,
    disabled = false,
    label,
    className = '',
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOption = options.find(opt => opt.value === currentValue);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string, optionDisabled?: boolean) => {
        if (optionDisabled) return;

        setInternalValue(optionValue);
        setIsOpen(false);

        if (onChange) {
            onChange(optionValue);
        }
    };

    return (
        <div className={`select-wrapper ${className}`.trim()} ref={selectRef}>
            {label && <label className="select-label">{label}</label>}
            <div
                className={`select-control ${isOpen ? 'select-control-open' : ''} ${disabled ? 'select-control-disabled' : ''}`.trim()}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <span className="select-value">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="select-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && !disabled && (
                <div className="select-dropdown">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className={`select-option ${currentValue === option.value ? 'select-option-selected' : ''} ${option.disabled ? 'select-option-disabled' : ''
                                }`.trim()}
                            onClick={() => handleSelect(option.value, option.disabled)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
