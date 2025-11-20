import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { useState } from 'react';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        key: 'tab1',
        label: 'Tab One',
        content: <div style={{ padding: '1rem' }}>Content for Tab One</div>,
    },
    {
        key: 'tab2',
        label: 'Tab Two',
        content: <div style={{ padding: '1rem' }}>Content for Tab Two</div>,
    },
    {
        key: 'tab3',
        label: 'Tab Three',
        content: <div style={{ padding: '1rem' }}>Content for Tab Three</div>,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

export const WithDisabledTab: Story = {
    args: {
        items: [
            ...sampleItems,
            {
                key: 'tab4',
                label: 'Disabled Tab',
                content: <div>You should not see this</div>,
                disabled: true,
            },
        ],
    },
};

export const Controlled: Story = {
    args: {},
    render: () => {
        const [activeKey, setActiveKey] = useState('tab2');

        return (
            <div style={{ minWidth: '500px' }}>
                <p style={{ marginBottom: '1rem' }}>Active tab: {activeKey}</p>
                <Tabs
                    items={sampleItems}
                    activeKey={activeKey}
                    onChange={setActiveKey}
                />
            </div>
        );
    },
};

export const ProfileExample: Story = {
    args: {
        items: [
            {
                key: 'overview',
                label: 'Overview',
                content: (
                    <div style={{ padding: '1rem' }}>
                        <h3>Profile Overview</h3>
                        <p>Name: John Doe</p>
                        <p>Email: john@example.com</p>
                    </div>
                ),
            },
            {
                key: 'settings',
                label: 'Settings',
                content: (
                    <div style={{ padding: '1rem' }}>
                        <h3>Account Settings</h3>
                        <p>Manage your account preferences here.</p>
                    </div>
                ),
            },
            {
                key: 'security',
                label: 'Security',
                content: (
                    <div style={{ padding: '1rem' }}>
                        <h3>Security Settings</h3>
                        <p>Change password and two-factor authentication.</p>
                    </div>
                ),
            },
        ],
    },
};
