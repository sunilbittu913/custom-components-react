import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['text', 'circle', 'rectangle'],
        },
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        variant: 'text',
        width: '100%',
    },
};

export const MultipleLines: Story = {
    args: {
        variant: 'text',
        lines: 3,
        width: '100%',
    },
};

export const Circle: Story = {
    args: {
        variant: 'circle',
        width: 40,
        height: 40,
    },
};

export const Rectangle: Story = {
    args: {
        variant: 'rectangle',
        width: 200,
        height: 120,
    },
};

export const CardSkeleton: Story = {
    args: {},
    render: () => (
        <div style={{ maxWidth: '300px', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <Skeleton variant="rectangle" width="100%" height={160} />
            <div style={{ marginTop: '1rem' }}>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" lines={2} />
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Skeleton variant="circle" width={32} height={32} />
                <Skeleton variant="text" width={120} />
            </div>
        </div>
    ),
};

export const UserProfile: Story = {
    args: {},
    render: () => (
        <div style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Skeleton variant="circle" width={64} height={64} />
                <div style={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                </div>
            </div>
            <Skeleton variant="text" lines={4} />
        </div>
    ),
};
