import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Warning: Story = {
    args: {
        children: 'Warning',
        variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger',
        variant: 'danger',
    },
};

export const Info: Story = {
    args: {
        children: 'Info',
        variant: 'info',
    },
};

export const Small: Story = {
    args: {
        children: 'Small',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        children: 'Large',
        size: 'large',
    },
};

export const DotBadge: Story = {
    args: {
        children: '',
        variant: 'danger',
        dot: true,
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
        </div>
    ),
};

export const WithCounts: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div>
                Messages <Badge variant="danger">12</Badge>
            </div>
            <div>
                Notifications <Badge variant="info">5</Badge>
            </div>
            <div>
                Updates <Badge variant="success">New</Badge>
            </div>
        </div>
    ),
};

export const Dots: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <span>Inbox</span>
                <Badge variant="danger" dot style={{ position: 'absolute', top: '-4px', right: '-8px' }} />
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <span>Notifications</span>
                <Badge variant="success" dot style={{ position: 'absolute', top: '-4px', right: '-8px' }} />
            </div>
        </div>
    ),
};
