import React, { useState, useRef, useEffect } from 'react';

export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverProps {
    /**
     * Trigger element
     */
    children: React.ReactElement;
    /**
     * Popover content
     */
    content: React.ReactNode;
    /**
     * Popover title
     */
    title?: string;
    /**
     * Placement
     */
    placement?: PopoverPlacement;
    /**
     * Open state (controlled)
     */
    open?: boolean;
    /**
     * On open change callback
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Trigger mode
     */
    trigger?: 'click' | 'hover';
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Popover component for contextual information
 */
export const Popover: React.FC<PopoverProps> = ({
    children,
    content,
    title,
    placement = 'top',
    open: controlledOpen,
    onOpenChange,
    trigger = 'click',
    className = '',
}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const setOpen = (value: boolean) => {
        if (!isControlled) {
            setInternalOpen(value);
        }
        onOpenChange?.(value);
    };

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                triggerRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleTriggerClick = () => {
        if (trigger === 'click') {
            setOpen(!open);
        }
    };

    const handleMouseEnter = () => {
        if (trigger === 'hover') {
            setOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (trigger === 'hover') {
            setOpen(false);
        }
    };

    return (
        <div className="popover-container" style={{ position: 'relative', display: 'inline-block' }}>
            <div
                ref={triggerRef}
                onClick={handleTriggerClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {open && (
                <div
                    ref={popoverRef}
                    className={`popover popover-${placement} ${className}`.trim()}
                    role="tooltip"
                >
                    {title && <div className="popover-title">{title}</div>}
                    <div className="popover-content">{content}</div>
                    <div className="popover-arrow"></div>
                </div>
            )}
        </div>
    );
};
