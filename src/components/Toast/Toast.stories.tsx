import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastContainer } from './Toast';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
        },
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        message: 'Successfully saved changes!',
        variant: 'success',
        duration: 0,
    },
};

export const Error: Story = {
    args: {
        message: 'An error occurred. Please try again.',
        variant: 'error',
        duration: 0,
    },
};

export const Warning: Story = {
    args: {
        message: 'This action cannot be undone.',
        variant: 'warning',
        duration: 0,
    },
};

export const Info: Story = {
    args: {
        message: 'Your session will expire in 5 minutes.',
        variant: 'info',
        duration: 0,
    },
};

export const Interactive: Story = {
    render: () => {
        const [toasts, setToasts] = useState<Array<{ id: number; message: string; variant: 'success' | 'error' | 'warning' | 'info' }>>([]);
        let idCounter = 0;

        const addToast = (variant: 'success' | 'error' | 'warning' | 'info') => {
            const messages = {
                success: 'Action completed successfully!',
                error: 'Something went wrong!',
                warning: 'Please proceed with caution.',
                info: 'Here\'s some useful information.',
            };

            const id = idCounter++;
            setToasts(prev => [...prev, { id, message: messages[variant], variant }]);
        };

        const removeToast = (id: number) => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        };

        return (
            <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Button size="small" variant="primary" onClick={() => addToast('success')}>
                        Success Toast
                    </Button>
                    <Button size="small" variant="danger" onClick={() => addToast('error')}>
                        Error Toast
                    </Button>
                    <Button size="small" variant="secondary" onClick={() => addToast('warning')}>
                        Warning Toast
                    </Button>
                    <Button size="small" variant="secondary" onClick={() => addToast('info')}>
                        Info Toast
                    </Button>
                </div>

                <ToastContainer position="top-right">
                    {toasts.map(toast => (
                        <Toast
                            key={toast.id}
                            message={toast.message}
                            variant={toast.variant}
                            duration={5000}
                            onClose={() => removeToast(toast.id)}
                        />
                    ))}
                </ToastContainer>
            </div>
        );
    },
};

export const WithContainer: Story = {
    render: () => (
        <ToastContainer position="bottom-center">
            <Toast message="Toast in container" variant="info" duration={0} />
        </ToastContainer>
    ),
};
