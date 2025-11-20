import React, { useState } from 'react';

export interface TabItem {
    /**
     * Tab key/id
     */
    key: string;
    /**
     * Tab label
     */
    label: string;
    /**
     * Tab content
     */
    content: React.ReactNode;
    /**
     * Disabled state
     */
    disabled?: boolean;
}

export interface TabsProps {
    /**
     * Array of tab items
     */
    items: TabItem[];
    /**
     * Default active tab key
     */
    defaultActiveKey?: string;
    /**
     * Controlled active tab key
     */
    activeKey?: string;
    /**
     * Callback when tab changes
     */
    onChange?: (key: string) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Tabs component for organizing content
 */
export const Tabs: React.FC<TabsProps> = ({
    items,
    defaultActiveKey,
    activeKey,
    onChange,
    className = '',
}) => {
    const [internalActiveKey, setInternalActiveKey] = useState(
        defaultActiveKey || items[0]?.key || ''
    );

    const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

    const handleTabClick = (key: string, disabled?: boolean) => {
        if (disabled) return;

        setInternalActiveKey(key);
        if (onChange) {
            onChange(key);
        }
    };

    const activeTab = items.find(item => item.key === currentActiveKey);

    return (
        <div className={`tabs ${className}`.trim()}>
            <div className="tabs-header" role="tablist">
                {items.map(item => (
                    <button
                        key={item.key}
                        className={`tab-item ${currentActiveKey === item.key ? 'tab-item-active' : ''} ${item.disabled ? 'tab-item-disabled' : ''
                            }`.trim()}
                        onClick={() => handleTabClick(item.key, item.disabled)}
                        role="tab"
                        aria-selected={currentActiveKey === item.key}
                        aria-disabled={item.disabled}
                        disabled={item.disabled}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="tabs-content" role="tabpanel">
                {activeTab?.content}
            </div>
        </div>
    );
};
