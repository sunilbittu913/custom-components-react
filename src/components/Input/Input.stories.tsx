import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        placeholder: 'Choose a username',
        helperText: 'Your username must be unique and at least 3 characters long.',
    },
};

export const WithError: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        error: 'Password must be at least 8 characters long.',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Cannot edit this',
        disabled: true,
        value: 'Disabled value',
    },
};

export const Number: Story = {
    args: {
        label: 'Age',
        type: 'number',
        placeholder: 'Enter your age',
        helperText: 'Must be 18 or older',
    },
};

export const NoLabel: Story = {
    args: {
        placeholder: 'Input without label',
        helperText: 'This input has no label',
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Full Width Input',
        placeholder: 'This input takes full width',
        wrapperClassName: 'full-width-input',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};
