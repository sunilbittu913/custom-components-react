import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

const SearchIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
);

const InboxIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    </svg>
);

export const Default: Story = {
    args: {
        title: 'No results found',
        description: 'Try adjusting your search or filters to find what you\'re looking for.',
    },
};

export const WithIcon: Story = {
    args: {
        icon: <SearchIcon />,
        title: 'No search results',
        description: 'We couldn\'t find any matches for your search.',
    },
};

export const WithAction: Story = {
    args: {
        icon: <InboxIcon />,
        title: 'No messages',
        description: 'Your inbox is empty. Start a conversation to see messages here.',
        action: <Button variant="primary">New Message</Button>,
    },
};

export const NoData: Story = {
    args: {
        title: 'No data available',
        description: 'There is no data to display at the moment.',
        action: <Button variant="secondary">Refresh</Button>,
    },
};

export const EmptyList: Story = {
    args: {
        title: 'No items yet',
        description: 'Get started by creating your first item.',
        action: (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button variant="primary">Create Item</Button>
                <Button variant="secondary">Import</Button>
            </div>
        ),
    },
};
