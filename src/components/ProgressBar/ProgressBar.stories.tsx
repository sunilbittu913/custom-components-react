import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'danger'],
        },
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        percent: 60,
    },
};

export const WithPercentage: Story = {
    args: {
        percent: 75,
        showPercent: true,
    },
};

export const Success: Story = {
    args: {
        percent: 100,
        variant: 'success',
        showPercent: true,
    },
};

export const Warning: Story = {
    args: {
        percent: 50,
        variant: 'warning',
        showPercent: true,
    },
};

export const Danger: Story = {
    args: {
        percent: 20,
        variant: 'danger',
        showPercent: true,
    },
};

export const LargeHeight: Story = {
    args: {
        percent: 70,
        height: 20,
        showPercent: true,
    },
};

export const SmallHeight: Story = {
    args: {
        percent: 45,
        height: 4,
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '400px' }}>
            <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Primary (60%)</p>
                <ProgressBar percent={60} variant="primary" showPercent />
            </div>
            <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Success (100%)</p>
                <ProgressBar percent={100} variant="success" showPercent />
            </div>
            <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Warning (45%)</p>
                <ProgressBar percent={45} variant="warning" showPercent />
            </div>
            <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Danger (15%)</p>
                <ProgressBar percent={15} variant="danger" showPercent />
            </div>
        </div>
    ),
};
