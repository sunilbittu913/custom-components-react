import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Link content
     */
    children: React.ReactNode;
    /**
     * Link href
     */
    href: string;
    /**
     * Link variant
     */
    variant?: 'primary' | 'secondary' | 'danger';
    /**
     * Underline style
     */
    underline?: 'none' | 'hover' | 'always';
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Link component for navigation
 */
export const Link: React.FC<LinkProps> = ({
    children,
    href,
    variant = 'primary',
    underline = 'hover',
    className = '',
    ...props
}) => {
    return (
        <a
            href={href}
            className={`link link-${variant} link-underline-${underline} ${className}`.trim()}
            {...props}
        >
            {children}
        </a>
    );
};
