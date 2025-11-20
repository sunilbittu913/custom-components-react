import React from 'react';

export interface EmptyStateProps {
    /**
     * Empty state icon or illustration
     */
    icon?: React.ReactNode;
    /**
     * Empty state title
     */
    title: string;
    /**
     * Empty state description
     */
    description?: string;
    /**
     * Action button
     */
    action?: React.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Empty State component for displaying no-content states
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    action,
    className = '',
}) => {
    return (
        <div className={`empty-state ${className}`.trim()}>
            {icon && <div className="empty-state-icon">{icon}</div>}
            <h3 className="empty-state-title">{title}</h3>
            {description && <p className="empty-state-description">{description}</p>}
            {action && <div className="empty-state-action">{action}</div>}
        </div>
    );
};
