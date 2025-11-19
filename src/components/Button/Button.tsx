import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant style
     */
    variant?: 'primary' | 'secondary' | 'danger';
    /**
     * Button size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button content
     */
    children: React.ReactNode;
}

/**
 * CustomButton component with multiple variants and sizes
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    ...props
}) => {
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
