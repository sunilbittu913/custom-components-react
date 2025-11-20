import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: ['left', 'right', 'top', 'bottom'],
        },
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Right Drawer"
                    placement="right"
                >
                    <p>This is the drawer content.</p>
                    <p>It slides in from the right side.</p>
                </Drawer>
            </>
        );
    },
};

export const Left: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Left Drawer"
                    placement="left"
                >
                    <p>This drawer slides in from the left.</p>
                </Drawer>
            </>
        );
    },
};

export const Top: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Top Drawer"
                    placement="top"
                    size={300}
                >
                    <p>This drawer slides in from the top.</p>
                </Drawer>
            </>
        );
    },
};

export const Bottom: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Bottom Drawer"
                    placement="bottom"
                    size={300}
                >
                    <p>This drawer slides in from the bottom.</p>
                </Drawer>
            </>
        );
    },
};

export const Wide: Story = {
    args: {},
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Wide Drawer</Button>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Wide Drawer"
                    size={600}
                >
                    <h4>Wide Drawer Content</h4>
                    <p>This drawer has more width for larger content.</p>
                </Drawer>
            </>
        );
    },
};
