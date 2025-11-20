import React from 'react';

export interface ButtonGroupProps {
    /**
     * Button group children
     */
    children: React.ReactNode;
    /**
     * Vertical orientation
     */
    vertical?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Button Group component for grouping related buttons
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    vertical = false,
    className = '',
}) => {
    return (
        <div
            className={`button-group ${vertical ? 'button-group-vertical' : ''} ${className}`.trim()}
            role="group"
        >
            {children}
        </div>
    );
};
