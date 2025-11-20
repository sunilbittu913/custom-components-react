import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 'fullscreen'],
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Modal Title"
                >
                    <p>This is the modal content. You can put any content here.</p>
                </Modal>
            </>
        );
    },
};

export const WithFooter: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Modal with Footer</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Confirm Action"
                    footer={
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
                        </div>
                    }
                >
                    <p>Are you sure you want to perform this action?</p>
                </Modal>
            </>
        );
    },
};

export const Small: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Small Modal</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Small Modal"
                    size="small"
                >
                    <p>This is a small modal.</p>
                </Modal>
            </>
        );
    },
};

export const Large: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Large Modal</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Large Modal"
                    size="large"
                >
                    <p>This is a large modal with more content space.</p>
                    <p>You can add more content here as needed.</p>
                </Modal>
            </>
        );
    },
};

export const Fullscreen: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Fullscreen Modal</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Fullscreen Modal"
                    size="fullscreen"
                >
                    <h4>Welcome to the fullscreen modal</h4>
                    <p>This modal takes up the entire viewport.</p>
                </Modal>
            </>
        );
    },
};

export const NonClosable: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Non-Closable Modal</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Required Action"
                    closable={false}
                    footer={
                        <Button variant="primary" onClick={() => setOpen(false)}>
                            I Understand
                        </Button>
                    }
                >
                    <p>This modal cannot be closed by clicking outside or pressing escape.</p>
                    <p>You must click the button to close it.</p>
                </Modal>
            </>
        );
    },
};
