import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
        },
        trigger: {
            control: 'select',
            options: ['click', 'hover'],
        },
    },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: 'This is the popover content',
        children: <Button>Click me</Button>,
    },
};

export const WithTitle: Story = {
    args: {
        title: 'Popover Title',
        content: 'This is the popover content with a title.',
        children: <Button>Hover me</Button>,
        trigger: 'hover',
    },
};

export const Top: Story = {
    args: {
        content: 'Popover on top',
        placement: 'top',
        children: <Button>Top</Button>,
    },
};

export const Right: Story = {
    args: {
        content: 'Popover on right',
        placement: 'right',
        children: <Button>Right</Button>,
    },
};

export const Bottom: Story = {
    args: {
        content: 'Popover on bottom',
        placement: 'bottom',
        children: <Button>Bottom</Button>,
    },
};

export const Left: Story = {
    args: {
        content: 'Popover on left',
        placement: 'left',
        children: <Button>Left</Button>,
    },
};

export const OnHover: Story = {
    args: {
        title: 'User Information',
        content: (
            <div>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Role:</strong> Admin</p>
            </div>
        ),
        trigger: 'hover',
        children: <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Hover for info</span>,
    },
};

export const RichContent: Story = {
    args: {
        title: 'Actions',
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Button size="small" variant="ghost">Edit</Button>
                <Button size="small" variant="ghost">Share</Button>
                <Button size="small" variant="danger">Delete</Button>
            </div>
        ),
        children: <Button>Actions</Button>,
    },
};
