import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'This is an informational alert message.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Your changes have been saved successfully!',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Please review your settings before proceeding.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'An error occurred while processing your request.',
    },
};

export const WithTitle: Story = {
    args: {
        variant: 'info',
        title: 'Important Notice',
        children: 'Your subscription will renew automatically on the 1st of next month.',
    },
};

export const Closable: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        children: 'This action cannot be undone.',
        closable: true,
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '500px' }}>
            <Alert variant="info" title="Info">
                This is an informational message.
            </Alert>
            <Alert variant="success" title="Success">
                Operation completed successfully!
            </Alert>
            <Alert variant="warning" title="Warning">
                Please proceed with caution.
            </Alert>
            <Alert variant="error" title="Error">
                Something went wrong.
            </Alert>
        </div>
    ),
};
