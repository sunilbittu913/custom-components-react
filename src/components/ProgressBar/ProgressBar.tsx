import React from 'react';

export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';

export interface ProgressBarProps {
    /**
     * Progress percentage (0-100)
     */
    percent: number;
    /**
     * Show percentage text
     */
    showPercent?: boolean;
    /**
     * Progress bar variant
     */
    variant?: ProgressBarVariant;
    /**
     * Progress bar height
     */
    height?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Progress Bar component for showing completion status
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
    percent,
    showPercent = false,
    variant = 'primary',
    height = 8,
    className = '',
}) => {
    const clampedPercent = Math.min(100, Math.max(0, percent));

    return (
        <div className={`progress-bar-wrapper ${className}`.trim()}>
            <div
                className="progress-bar-track"
                style={{ height: `${height}px` }}
                role="progressbar"
                aria-valuenow={clampedPercent}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className={`progress-bar-fill progress-bar-fill-${variant}`.trim()}
                    style={{ width: `${clampedPercent}%` }}
                />
            </div>
            {showPercent && (
                <span className="progress-bar-text">{Math.round(clampedPercent)}%</span>
            )}
        </div>
    );
};
