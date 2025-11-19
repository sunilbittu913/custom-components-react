import React from 'react';

export interface CardProps {
    /**
     * Card variant style
     */
    variant?: 'elevated' | 'outlined';
    /**
     * Card header content
     */
    header?: React.ReactNode;
    /**
     * Card main content
     */
    children: React.ReactNode;
    /**
     * Card footer content
     */
    footer?: React.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Card component for displaying content in a container
 */
export const Card: React.FC<CardProps> = ({
    variant = 'elevated',
    header,
    children,
    footer,
    className = '',
}) => {
    const variantClass = `card-${variant}`;
    const classes = `card ${variantClass} ${className}`.trim();

    return (
        <div className={classes}>
            {header && (
                <div className="card-header">
                    {typeof header === 'string' ? (
                        <h3 className="card-title">{header}</h3>
                    ) : (
                        header
                    )}
                </div>
            )}
            <div className="card-content">{children}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};
