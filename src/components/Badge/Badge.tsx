import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps {
    /**
     * Badge content
     */
    children: React.ReactNode;
    /**
     * Badge variant
     */
    variant?: BadgeVariant;
    /**
     * Badge size
     */
    size?: BadgeSize;
    /**
     * Show as dot (no content)
     */
    dot?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Badge component for labels and indicators
 */
export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    dot = false,
    className = '',
}) => {
    const classes = `badge badge-${variant} badge-${size} ${dot ? 'badge-dot' : ''} ${className}`.trim();

    return (
        <span className={classes}>
            {!dot && children}
        </span>
    );
};
