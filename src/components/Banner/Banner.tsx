import React from 'react';

export type BannerVariant = 'info' | 'success' | 'warning' | 'error';

export interface BannerProps {
    /**
     * Banner variant
     */
    variant?: BannerVariant;
    /**
     * Banner title
     */
    title?: string;
    /**
     * Banner content
     */
    children: React.ReactNode;
    /**
     * Action buttons
     */
    actions?: React.ReactNode;
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
 * Banner component for important announcements and messages
 */
export const Banner: React.FC<BannerProps> = ({
    variant = 'info',
    title,
    children,
    actions,
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
        <div className={`banner banner-${variant} ${className}`.trim()} role="banner">
            <div className="banner-content">
                {title && <div className="banner-title">{title}</div>}
                <div className="banner-message">{children}</div>
                {actions && <div className="banner-actions">{actions}</div>}
            </div>
            {closable && (
                <button className="banner-close" onClick={handleClose} aria-label="Close banner">
                    ✕
                </button>
            )}
        </div>
    );
};
