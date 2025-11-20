import React, { useState } from 'react';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
    /**
     * Tooltip content
     */
    content: React.ReactNode;
    /**
     * Element that triggers the tooltip
     */
    children: React.ReactElement;
    /**
     * Tooltip position
     */
    position?: TooltipPosition;
    /**
     * Delay before showing (ms)
     */
    delay?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Tooltip component for contextual information
 */
export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    delay = 200,
    className = '',
}) => {
    const [visible, setVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        const id = setTimeout(() => {
            setVisible(true);
        }, delay);
        setTimeoutId(id);
    };

    const handleMouseLeave = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setVisible(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            {children}
            {visible && (
                <div
                    className={`tooltip tooltip-${position} ${className}`.trim()}
                    role="tooltip"
                >
                    <div className="tooltip-content">{content}</div>
                    <div className="tooltip-arrow"></div>
                </div>
            )}
        </div>
    );
};
