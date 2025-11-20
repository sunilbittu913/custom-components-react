import React, { useEffect } from 'react';

export interface DialogProps {
    /**
     * Whether the dialog is open
     */
    open: boolean;
    /**
     * Callback when dialog should close
     */
    onClose?: () => void;
    /**
     * Dialog title
     */
    title?: string;
    /**
     * Dialog content
     */
    children: React.ReactNode;
    /**
     * Footer actions
     */
    footer?: React.ReactNode;
    /**
     * Show close button
     */
    showCloseButton?: boolean;
    /**
     * Dialog size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Dialog component for modal interactions
 */
export const Dialog: React.FC<DialogProps> = ({
    open,
    onClose,
    title,
    children,
    footer,
    showCloseButton = true,
    size = 'medium',
    className = '',
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open && onClose) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };

    return (
        <div className="dialog-backdrop" onClick={handleBackdropClick}>
            <div className={`dialog dialog-${size} ${className}`.trim()} role="dialog" aria-modal="true">
                {(title || showCloseButton) && (
                    <div className="dialog-header">
                        {title && <h2 className="dialog-title">{title}</h2>}
                        {showCloseButton && (
                            <button
                                className="dialog-close"
                                onClick={onClose}
                                aria-label="Close dialog"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                )}
                <div className="dialog-content">{children}</div>
                {footer && <div className="dialog-footer">{footer}</div>}
            </div>
        </div>
    );
};
