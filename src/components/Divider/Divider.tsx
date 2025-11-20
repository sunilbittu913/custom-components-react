import React from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
    /**
     * Divider orientation
     */
    orientation?: DividerOrientation;
    /**
     * Add spacing around divider
     */
    spacing?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Divider component for visual separation
 */
export const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    spacing = 16,
    className = '',
}) => {
    const style = orientation === 'horizontal'
        ? { marginTop: `${spacing}px`, marginBottom: `${spacing}px` }
        : { marginLeft: `${spacing}px`, marginRight: `${spacing}px` };

    return (
        <hr
            className={`divider divider-${orientation} ${className}`.trim()}
            style={style}
            role="separator"
            aria-orientation={orientation}
        />
    );
};
