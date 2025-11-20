import React from 'react';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface AvatarProps {
    /**
     * Avatar source URL
     */
    src?: string;
    /**
     * Alt text for image
     */
    alt?: string;
    /**
     * Initials to display when no image
     */
    initials?: string;
    /**
     * Avatar size
     */
    size?: AvatarSize;
    /**
     * Avatar shape
     */
    shape?: 'circle' | 'square';
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Avatar component for user representation
 */
export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    initials,
    size = 'medium',
    shape = 'circle',
    className = '',
}) => {
    const [imageError, setImageError] = React.useState(false);

    const displayInitials = initials || (alt ? alt.substring(0, 2).toUpperCase() : '?');

    return (
        <div
            className={`avatar avatar-${size} avatar-${shape} ${className}`.trim()}
            role="img"
            aria-label={alt}
        >
            {src && !imageError ? (
                <img
                    src={src}
                    alt={alt}
                    className="avatar-image"
                    onError={() => setImageError(true)}
                />
            ) : (
                <span className="avatar-initials">{displayInitials}</span>
            )}
        </div>
    );
};
