import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'white'],
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Small: Story = {
    args: {
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const White: Story = {
    render: () => (
        <div style={{ backgroundColor: '#333', padding: '2rem', borderRadius: '8px' }}>
            <Spinner variant="white" />
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
        </div>
    ),
};

export const InButton: Story = {
    render: () => (
        <button
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'not-allowed',
            }}
        >
            <Spinner size="small" variant="white" />
            Loading...
        </button>
    ),
};
