import React from 'react';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface TagProps {
    /**
     * Tag content
     */
    children: React.ReactNode;
    /**
     * Tag variant
     */
    variant?: TagVariant;
    /**
     * Show close button
     */
    closable?: boolean;
    /**
     * Callback when close is clicked
     */
    onClose?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Tag component for labels and categorization
 */
export const Tag: React.FC<TagProps> = ({
    children,
    variant = 'default',
    closable = false,
    onClose,
    className = '',
}) => {
    return (
        <span className={`tag tag-${variant} ${className}`.trim()}>
            <span className="tag-content">{children}</span>
            {closable && (
                <button
                    className="tag-close"
                    onClick={onClose}
                    aria-label="Remove tag"
                >
                    ✕
                </button>
            )}
        </span>
    );
};
