import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Dialog Title"
                >
                    <p>This is the dialog content. You can put any content here.</p>
                </Dialog>
            </>
        );
    },
};

export const WithFooter: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog with Footer</Button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Confirm Action"
                    footer={
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <Button variant="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => setOpen(false)}>
                                Confirm
                            </Button>
                        </div>
                    }
                >
                    <p>Are you sure you want to proceed with this action?</p>
                </Dialog>
            </>
        );
    },
};

export const SmallDialog: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Small Dialog</Button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Small Dialog"
                    size="small"
                >
                    <p>This is a smaller dialog.</p>
                </Dialog>
            </>
        );
    },
};

export const LargeDialog: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Large Dialog</Button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Large Dialog"
                    size="large"
                >
                    <p>This is a larger dialog with more space for content.</p>
                    <p>You can add multiple paragraphs and sections.</p>
                    <p>The dialog will accommodate the content appropriately.</p>
                </Dialog>
            </>
        );
    },
};

export const NoCloseButton: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title="No Close Button"
                    showCloseButton={false}
                    footer={
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    }
                >
                    <p>This dialog doesn't have a close button in the header.</p>
                    <p>You must use the footer button or press Escape to close.</p>
                </Dialog>
            </>
        );
    },
};
