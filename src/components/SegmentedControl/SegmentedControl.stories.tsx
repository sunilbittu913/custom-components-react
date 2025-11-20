import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';
import { useState } from 'react';

const meta = {
    title: 'Components/SegmentedControl',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const viewOptions = [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
    { value: 'table', label: 'Table' },
];

export const Default: Story = {
    args: {
        options: viewOptions,
    },
};

export const WithDefaultValue: Story = {
    args: {
        options: viewOptions,
        defaultValue: 'grid',
    },
};

export const Block: Story = {
    args: {
        options: viewOptions,
        block: true,
    },
};

export const WithDisabledOption: Story = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
            { value: 'option3', label: 'Option 3' },
        ],
    },
};

export const Interactive: Story = {
    args: {},
    render: () => {
        const [value, setValue] = useState('list');

        return (
            <div>
                <SegmentedControl
                    options={viewOptions}
                    value={value}
                    onChange={setValue}
                />
                <p style={{ marginTop: '1rem' }}>Selected: {value}</p>
            </div>
        );
    },
};

export const TwoOptions: Story = {
    args: {
        options: [
            { value: 'on', label: 'On' },
            { value: 'off', label: 'Off' },
        ],
    },
};

export const ManyOptions: Story = {
    args: {
        options: [
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'yearly', label: 'Yearly' },
            { value: 'custom', label: 'Custom' },
        ],
    },
};
