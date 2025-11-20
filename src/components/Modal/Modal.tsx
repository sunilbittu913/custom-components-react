import React, { useEffect } from 'react';

export type ModalSize = 'small' | 'medium' | 'large' | 'fullscreen';

export interface ModalProps {
    /**
     * Whether modal is open
     */
    open: boolean;
    /**
     * Callback when modal should close
     */
    onClose?: () => void;
    /**
     * Modal title
     */
    title?: string;
    /**
     * Modal content
     */
    children: React.ReactNode;
    /**
     * Footer content
     */
    footer?: React.ReactNode;
    /**
     * Modal size
     */
    size?: ModalSize;
    /**
     * Show close button
     */
    closable?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Modal component for overlays and dialogs
 */
export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    title,
    children,
    footer,
    size = 'medium',
    closable = true,
    className = '',
}) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open && closable && onClose) {
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
    }, [open, closable, onClose]);

    if (!open) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closable && onClose) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className={`modal modal-${size} ${className}`.trim()} role="dialog" aria-modal="true">
                {(title || closable) && (
                    <div className="modal-header">
                        {title && <h3 className="modal-title">{title}</h3>}
                        {closable && (
                            <button className="modal-close" onClick={onClose} aria-label="Close">
                                ✕
                            </button>
                        )}
                    </div>
                )}
                <div className="modal-content">{children}</div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
};
