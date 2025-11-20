import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from './ProgressCircle';

const meta = {
    title: 'Components/ProgressCircle',
    component: ProgressCircle,
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
            options: ['primary', 'success', 'warning', 'danger'],
        },
    },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        percent: 75,
    },
};

export const Small: Story = {
    args: {
        percent: 60,
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        percent: 85,
        size: 'large',
    },
};

export const Success: Story = {
    args: {
        percent: 100,
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        percent: 50,
        variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
        percent: 25,
        variant: 'danger',
    },
};

export const WithoutPercent: Story = {
    args: {
        percent: 65,
        showPercent: false,
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <ProgressCircle percent={75} variant="primary" />
            <ProgressCircle percent={100} variant="success" />
            <ProgressCircle percent={50} variant="warning" />
            <ProgressCircle percent={25} variant="danger" />
        </div>
    ),
};

export const AllSizes: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <ProgressCircle percent={75} size="small" />
            <ProgressCircle percent={75} size="medium" />
            <ProgressCircle percent={75} size="large" />
        </div>
    ),
};
