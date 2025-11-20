import React from 'react';

export type SkeletonVariant = 'text' | 'circle' | 'rectangle';

export interface SkeletonProps {
    /**
     * Skeleton variant
     */
    variant?: SkeletonVariant;
    /**
     * Width
     */
    width?: number | string;
    /**
     * Height
     */
    height?: number | string;
    /**
     * Number of lines (for text variant)
     */
    lines?: number;
    /**
     * Enable animation
     */
    animation?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Skeleton component for loading states
 */
export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'text',
    width,
    height,
    lines = 1,
    animation = true,
    className = '',
}) => {
    if (variant === 'text' && lines > 1) {
        return (
            <div className={`skeleton-group ${className}`.trim()}>
                {Array.from({ length: lines }).map((_, index) => (
                    <div
                        key={index}
                        className={`skeleton skeleton-text ${animation ? 'skeleton-animated' : ''}`.trim()}
                        style={{
                            width: index === lines - 1 ? '80%' : width,
                            height: height || '1em',
                        }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={`skeleton skeleton-${variant} ${animation ? 'skeleton-animated' : ''} ${className}`.trim()}
            style={{ width, height }}
        />
    );
};
