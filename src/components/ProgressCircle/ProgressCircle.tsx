import React from 'react';

export type ProgressCircleSize = 'small' | 'medium' | 'large';
export type ProgressCircleVariant = 'primary' | 'success' | 'warning' | 'danger';

export interface ProgressCircleProps {
    /**
     * Progress percentage (0-100)
     */
    percent: number;
    /**
     * Circle size
     */
    size?: ProgressCircleSize;
    /**
     * Circle variant
     */
    variant?: ProgressCircleVariant;
    /**
     * Show percentage text
     */
    showPercent?: boolean;
    /**
     * Stroke width
     */
    strokeWidth?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Progress Circle component for circular progress indicators
 */
export const ProgressCircle: React.FC<ProgressCircleProps> = ({
    percent,
    size = 'medium',
    variant = 'primary',
    showPercent = true,
    strokeWidth = 4,
    className = '',
}) => {
    const sizeMap = {
        small: 60,
        medium: 80,
        large: 120,
    };

    const circleSize = sizeMap[size];
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div
            className={`progress-circle progress-circle-${size} progress-circle-${variant} ${className}`.trim()}
            style={{ width: circleSize, height: circleSize }}
        >
            <svg width={circleSize} height={circleSize}>
                <circle
                    className="progress-circle-bg"
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    className="progress-circle-fill"
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
                />
            </svg>
            {showPercent && (
                <div className="progress-circle-text">
                    {Math.round(percent)}%
                </div>
            )}
        </div>
    );
};
