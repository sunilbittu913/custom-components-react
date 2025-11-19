import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        size: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        size: 'medium',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger Button',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        children: 'Small Button',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        children: 'Large Button',
        size: 'large',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        children: 'Disabled Button',
        disabled: true,
    },
};
