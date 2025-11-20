import React, { useState } from 'react';

export interface AccordionItemProps {
    /**
     * Item key/id
     */
    key: string;
    /**
     * Item title
     */
    title: string;
    /**
     * Item content
     */
    content: React.ReactNode;
}

export interface AccordionProps {
    /**
     * Accordion items
     */
    items: AccordionItemProps[];
    /**
     * Allow multiple items to be open
     */
    multiple?: boolean;
    /**
     * Default opened item keys
     */
    defaultOpenKeys?: string[];
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Accordion component for collapsible content sections
 */
export const Accordion: React.FC<AccordionProps> = ({
    items,
    multiple = false,
    defaultOpenKeys = [],
    className = '',
}) => {
    const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);

    const toggleItem = (key: string) => {
        if (multiple) {
            setOpenKeys(prev =>
                prev.includes(key)
                    ? prev.filter(k => k !== key)
                    : [...prev, key]
            );
        } else {
            setOpenKeys(prev =>
                prev.includes(key) ? [] : [key]
            );
        }
    };

    return (
        <div className={`accordion ${className}`.trim()}>
            {items.map((item) => (
                <div key={item.key} className="accordion-item">
                    <button
                        className={`accordion-header ${openKeys.includes(item.key) ? 'accordion-header-open' : ''}`.trim()}
                        onClick={() => toggleItem(item.key)}
                        aria-expanded={openKeys.includes(item.key)}
                    >
                        <span className="accordion-title">{item.title}</span>
                        <span className="accordion-icon">
                            {openKeys.includes(item.key) ? '−' : '+'}
                        </span>
                    </button>
                    {openKeys.includes(item.key) && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
