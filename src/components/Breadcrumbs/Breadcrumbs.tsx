import React from 'react';

export interface BreadcrumbItem {
    /**
     * Item label
     */
    label: string;
    /**
     * Item href
     */
    href?: string;
    /**
     * Click handler
     */
    onClick?: () => void;
}

export interface BreadcrumbsProps {
    /**
     * Breadcrumb items
     */
    items: BreadcrumbItem[];
    /**
     * Separator character
     */
    separator?: React.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Breadcrumbs component for navigation hierarchy
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    separator = '/',
    className = '',
}) => {
    return (
        <nav className={`breadcrumbs ${className}`.trim()} aria-label="Breadcrumb">
            <ol className="breadcrumbs-list">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="breadcrumbs-item">
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="breadcrumbs-link"
                                    aria-current={isLast ? 'page' : undefined}
                                    onClick={(e) => {
                                        if (item.onClick) {
                                            e.preventDefault();
                                            item.onClick();
                                        }
                                    }}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span
                                    className={`breadcrumbs-text ${isLast ? 'breadcrumbs-current' : ''}`.trim()}
                                    aria-current={isLast ? 'page' : undefined}
                                >
                                    {item.label}
                                </span>
                            )}
                            {!isLast && (
                                <span className="breadcrumbs-separator" aria-hidden="true">
                                    {separator}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
