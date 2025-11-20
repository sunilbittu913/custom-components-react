import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/Banner',
    component: Banner,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
        },
    },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'This is an informational banner message.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success',
        children: 'Your changes have been saved successfully!',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        children: 'Your trial period will end in 3 days. Please upgrade your plan.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        children: 'There was an error processing your request. Please try again.',
    },
};

export const WithActions: Story = {
    args: {
        variant: 'info',
        title: 'New Feature Available',
        children: 'We have released a new feature that you might find useful.',
        actions: (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button size="small" variant="primary">Learn More</Button>
                <Button size="small" variant="secondary">Dismiss</Button>
            </div>
        ),
    },
};

export const Closable: Story = {
    args: {
        variant: 'warning',
        title: 'Maintenance Scheduled',
        children: 'System maintenance is scheduled for tomorrow from 2 AM to 4 AM EST.',
        closable: true,
    },
};

export const FullExample: Story = {
    args: {
        variant: 'info',
        title: 'Update Available',
        children: 'A new version of the application is available. Update now to get the latest features and improvements.',
        actions: (
            <Button size="small" variant="primary">Update Now</Button>
        ),
        closable: true,
    },
};
