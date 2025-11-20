import React from 'react';

export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerVariant = 'primary' | 'secondary' | 'white';

export interface SpinnerProps {
    /**
     * Spinner size
     */
    size?: SpinnerSize;
    /**
     * Spinner variant
     */
    variant?: SpinnerVariant;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Spinner component for loading states
 */
export const Spinner: React.FC<SpinnerProps> = ({
    size = 'medium',
    variant = 'primary',
    className = '',
}) => {
    return (
        <div
            className={`spinner spinner-${size} spinner-${variant} ${className}`.trim()}
            role="status"
            aria-label="Loading"
        >
            <div className="spinner-circle"></div>
        </div>
    );
};
