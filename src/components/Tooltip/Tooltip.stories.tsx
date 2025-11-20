import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
        },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
    args: {
        content: 'This is a tooltip on top',
        position: 'top',
        children: <Button>Hover me (Top)</Button>,
    },
};

export const Right: Story = {
    args: {
        content: 'This is a tooltip on the right',
        position: 'right',
        children: <Button>Hover me (Right)</Button>,
    },
};

export const Bottom: Story = {
    args: {
        content: 'This is a tooltip on bottom',
        position: 'bottom',
        children: <Button>Hover me (Bottom)</Button>,
    },
};

export const Left: Story = {
    args: {
        content: 'This is a tooltip on the left',
        position: 'left',
        children: <Button>Hover me (Left)</Button>,
    },
};

export const LongContent: Story = {
    args: {
        content: 'This is a much longer tooltip with more detailed information that wraps to multiple lines.',
        position: 'top',
        children: <Button>Hover for long tooltip</Button>,
    },
};

export const NoDelay: Story = {
    args: {
        content: 'Appears immediately',
        delay: 0,
        children: <Button>No delay tooltip</Button>,
    },
};

export const AllPositions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '2rem', padding: '4rem' }}>
            <Tooltip content="Top tooltip" position="top">
                <Button>Top</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" position="right">
                <Button>Right</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" position="bottom">
                <Button>Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" position="left">
                <Button>Left</Button>
            </Tooltip>
        </div>
    ),
};
