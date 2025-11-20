import React from 'react';

export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Icon to display
     */
    icon: React.ReactNode;
    /**
     * Button variant
     */
    variant?: IconButtonVariant;
    /**
     * Button size
     */
    size?: IconButtonSize;
    /**
     * Aria label for accessibility
     */
    'aria-label': string;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Icon Button component for icon-only actions
 */
export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    variant = 'ghost',
    size = 'medium',
    className = '',
    ...props
}) => {
    return (
        <button
            className={`icon-button icon-button-${variant} icon-button-${size} ${className}`.trim()}
            {...props}
        >
            {icon}
        </button>
    );
};
