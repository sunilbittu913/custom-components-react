import React, { useState } from 'react';

export interface StarRatingProps {
    /**
     * Maximum number of stars
     */
    maxStars?: number;
    /**
     * Current rating value
     */
    value?: number;
    /**
     * Default rating value (uncontrolled)
     */
    defaultValue?: number;
    /**
     * Callback when rating changes
     */
    onChange?: (rating: number) => void;
    /**
     * Star size in pixels
     */
    size?: number;
    /**
     * Whether the rating is read-only
     */
    readOnly?: boolean;
    /**
     * Label for the rating
     */
    label?: string;
    /**
     * Show numeric value
     */
    showValue?: boolean;
    /**
     * Additional CSS classes for wrapper
     */
    className?: string;
}

/**
 * StarRating component for rating items
 */
export const StarRating: React.FC<StarRatingProps> = ({
    maxStars = 5,
    value,
    defaultValue = 0,
    onChange,
    size = 24,
    readOnly = false,
    label,
    showValue = false,
    className = '',
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverValue, setHoverValue] = useState(0);

    const currentValue = value !== undefined ? value : internalValue;

    const handleClick = (rating: number) => {
        if (readOnly) return;

        setInternalValue(rating);
        if (onChange) {
            onChange(rating);
        }
    };

    const handleMouseEnter = (rating: number) => {
        if (!readOnly) {
            setHoverValue(rating);
        }
    };

    const handleMouseLeave = () => {
        setHoverValue(0);
    };

    return (
        <div className={`star-rating-wrapper ${className}`.trim()}>
            {label && <label className="star-rating-label">{label}</label>}
            <div className="star-rating-container">
                {Array.from({ length: maxStars }, (_, index) => {
                    const rating = index + 1;
                    const isFilled = rating <= (hoverValue || currentValue);

                    return (
                        <span
                            key={rating}
                            className={`star ${isFilled ? 'star-filled' : 'star-empty'} ${readOnly ? 'star-readonly' : ''
                                }`}
                            onClick={() => handleClick(rating)}
                            onMouseEnter={() => handleMouseEnter(rating)}
                            onMouseLeave={handleMouseLeave}
                            style={{ fontSize: `${size}px`, cursor: readOnly ? 'default' : 'pointer' }}
                        >
                            ★
                        </span>
                    );
                })}
                {showValue && (
                    <span className="star-rating-value">
                        {currentValue} / {maxStars}
                    </span>
                )}
            </div>
        </div>
    );
};
