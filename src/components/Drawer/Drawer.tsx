import React, { useEffect } from 'react';

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
    /**
     * Whether drawer is open
     */
    open: boolean;
    /**
     * Callback when drawer should close
     */
    onClose?: () => void;
    /**
     * Drawer title
     */
    title?: string;
    /**
     * Drawer content
     */
    children: React.ReactNode;
    /**
     * Drawer placement
     */
    placement?: DrawerPlacement;
    /**
     * Drawer width (for left/right) or height (for top/bottom)
     */
    size?: number | string;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Drawer component for slide-in panels
 */
export const Drawer: React.FC<DrawerProps> = ({
    open,
    onClose,
    title,
    children,
    placement = 'right',
    size = 400,
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

    const sizeStyle =
        placement === 'left' || placement === 'right'
            ? { width: typeof size === 'number' ? `${size}px` : size }
            : { height: typeof size === 'number' ? `${size}px` : size };

    return (
        <div className="drawer-backdrop" onClick={handleBackdropClick}>
            <div
                className={`drawer drawer-${placement} ${className}`.trim()}
                style={sizeStyle}
                role="dialog"
                aria-modal="true"
            >
                {title && (
                    <div className="drawer-header">
                        <h3 className="drawer-title">{title}</h3>
                        <button className="drawer-close" onClick={onClose} aria-label="Close drawer">
                            ✕
                        </button>
                    </div>
                )}
                <div className="drawer-content">{children}</div>
            </div>
        </div>
    );
};
