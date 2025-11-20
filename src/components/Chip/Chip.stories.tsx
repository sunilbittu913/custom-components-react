import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { Avatar } from '../Avatar/Avatar';

const meta = {
    title: 'Components/Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium'],
        },
    },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Chip',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: 'Success',
        variant: 'success',
    },
};

export const WithDelete: Story = {
    args: {
        children: 'Deletable',
        onDelete: () => alert('Deleted!'),
    },
};

export const WithIcon: Story = {
    args: {
        children: 'With Icon',
        icon: <span>★</span>,
    },
};

export const WithAvatar: Story = {
    args: {
        children: 'John Doe',
        avatar: <Avatar size="small" initials="JD" shape="circle" />,
    },
};

export const Clickable: Story = {
    args: {
        children: 'Click me',
        onClick: () => alert('Clicked!'),
    },
};

export const Small: Story = {
    args: {
        children: 'Small chip',
        size: 'small',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
        onDelete: () => { },
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Chip variant="default">Default</Chip>
            <Chip variant="primary">Primary</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
            <Chip variant="danger">Danger</Chip>
            <Chip variant="info">Info</Chip>
        </div>
    ),
};

export const ChipGroup: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: '400px' }}>
            <Chip variant="primary" onDelete={() => { }}>React</Chip>
            <Chip variant="primary" onDelete={() => { }}>TypeScript</Chip>
            <Chip variant="primary" onDelete={() => { }}>Vite</Chip>
            <Chip variant="primary" onDelete={() => { }}>Storybook</Chip>
            <Chip variant="primary" onDelete={() => { }}>CSS</Chip>
        </div>
    ),
};
