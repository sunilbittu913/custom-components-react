import React from 'react';

export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ChipSize = 'small' | 'medium';

export interface ChipProps {
    /**
     * Chip content
     */
    children: React.ReactNode;
    /**
     * Chip variant
     */
    variant?: ChipVariant;
    /**
     * Chip size
     */
    size?: ChipSize;
    /**
     * Show delete icon
     */
    onDelete?: () => void;
    /**
     * Icon to display before text
     */
    icon?: React.ReactNode;
    /**
     * Avatar to display
     */
    avatar?: React.ReactNode;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Clickable
     */
    onClick?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Chip component for compact elements
 */
export const Chip: React.FC<ChipProps> = ({
    children,
    variant = 'default',
    size = 'medium',
    onDelete,
    icon,
    avatar,
    disabled = false,
    onClick,
    className = '',
}) => {
    const isClickable = !!onClick && !disabled;

    return (
        <div
            className={`chip chip-${variant} chip-${size} ${isClickable ? 'chip-clickable' : ''} ${disabled ? 'chip-disabled' : ''
                } ${className}`.trim()}
            onClick={isClickable ? onClick : undefined}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
        >
            {avatar && <div className="chip-avatar">{avatar}</div>}
            {icon && <div className="chip-icon">{icon}</div>}
            <span className="chip-label">{children}</span>
            {onDelete && !disabled && (
                <button
                    className="chip-delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    aria-label="Delete"
                >
                    ✕
                </button>
            )}
        </div>
    );
};
