import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { useState } from 'react';

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Enable notifications',
    },
};

export const Checked: Story = {
    args: {
        label: 'Auto-save',
        defaultChecked: true,
    },
};

export const Small: Story = {
    args: {
        label: 'Small switch',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        label: 'Large switch',
        size: 'large',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled switch',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled and checked',
        disabled: true,
        defaultChecked: true,
    },
};

export const NoLabel: Story = {
    args: {
        defaultChecked: false,
    },
};

export const Interactive: Story = {
    render: () => {
        const [isEnabled, setIsEnabled] = useState(false);

        return (
            <div>
                <Switch
                    label="Enable dark mode"
                    checked={isEnabled}
                    onChange={setIsEnabled}
                />
                <p style={{ marginTop: '1rem' }}>
                    Dark mode is {isEnabled ? 'enabled' : 'disabled'}
                </p>
            </div>
        );
    },
};

export const SettingsPanel: Story = {
    render: () => {
        const [notifications, setNotifications] = useState(true);
        const [autoSave, setAutoSave] = useState(false);
        const [analytics, setAnalytics] = useState(true);

        return (
            <div style={{ minWidth: '300px', padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Settings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Switch
                        label="Push Notifications"
                        checked={notifications}
                        onChange={setNotifications}
                    />
                    <Switch
                        label="Auto-save"
                        checked={autoSave}
                        onChange={setAutoSave}
                    />
                    <Switch
                        label="Analytics"
                        checked={analytics}
                        onChange={setAnalytics}
                    />
                </div>
            </div>
        );
    },
};
