import React, { useState, useEffect } from 'react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    /**
     * Toast message
     */
    message: string;
    /**
     * Toast variant
     */
    variant?: ToastVariant;
    /**
     * Duration in milliseconds (0 = no auto-dismiss)
     */
    duration?: number;
    /**
     * Show close button
     */
    showCloseButton?: boolean;
    /**
     * Callback when toast is closed
     */
    onClose?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Toast component for temporary notifications
 */
export const Toast: React.FC<ToastProps> = ({
    message,
    variant = 'info',
    duration = 5000,
    showCloseButton = true,
    onClose,
    className = '',
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setVisible(false);
                if (onClose) {
                    onClose();
                }
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div className={`toast toast-${variant} ${className}`.trim()} role="alert">
            <span className="toast-message">{message}</span>
            {showCloseButton && (
                <button
                    className="toast-close"
                    onClick={handleClose}
                    aria-label="Close notification"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export interface ToastContainerProps {
    /**
     * Position of toast container
     */
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    /**
     * Toast items
     */
    children: React.ReactNode;
}

/**
 * Container for managing multiple toasts
 */
export const ToastContainer: React.FC<ToastContainerProps> = ({
    position = 'top-right',
    children,
}) => {
    return (
        <div className={`toast-container toast-container-${position}`}>
            {children}
        </div>
    );
};
