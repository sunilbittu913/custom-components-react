import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Accept terms and conditions',
    },
};

export const Checked: Story = {
    args: {
        label: 'Subscribe to newsletter',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled option',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled and checked',
        disabled: true,
        checked: true,
    },
};

export const NoLabel: Story = {
    args: {
        checked: false,
    },
};

export const MultipleCheckboxes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Checkbox label="Option 1" />
            <Checkbox label="Option 2" defaultChecked />
            <Checkbox label="Option 3" />
            <Checkbox label="Option 4" disabled />
        </div>
    ),
};
