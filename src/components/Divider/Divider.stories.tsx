import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
        },
    },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <p>Content above divider</p>
            <Divider />
            <p>Content below divider</p>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
            <span>Left content</span>
            <Divider orientation="vertical" />
            <span>Right content</span>
        </div>
    ),
};

export const WithCustomSpacing: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <p>Content above</p>
            <Divider spacing={32} />
            <p>Content below</p>
        </div>
    ),
};

export const NoSpacing: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <p>Content above</p>
            <Divider spacing={0} />
            <p>Content below</p>
        </div>
    ),
};
