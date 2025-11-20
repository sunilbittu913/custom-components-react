import React from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
    /**
     * Alert variant
     */
    variant?: AlertVariant;
    /**
     * Alert title
     */
    title?: string;
    /**
     * Alert content
     */
    children: React.ReactNode;
    /**
     * Show close button
     */
    closable?: boolean;
    /**
     * Callback when closed
     */
    onClose?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Alert component for important messages
 */
export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    title,
    children,
    closable = false,
    onClose,
    className = '',
}) => {
    const [visible, setVisible] = React.useState(true);

    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div className={`alert alert-${variant} ${className}`.trim()} role="alert">
            <div className="alert-content">
                {title && <div className="alert-title">{title}</div>}
                <div className="alert-message">{children}</div>
            </div>
            {closable && (
                <button className="alert-close" onClick={handleClose} aria-label="Close alert">
                    ✕
                </button>
            )}
        </div>
    );
};
