import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { useState } from 'react';

const meta = {
    title: 'Components/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        min: {
            control: 'number',
        },
        max: {
            control: 'number',
        },
        step: {
            control: 'number',
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Volume',
        defaultValue: 50,
    },
};

export const WithCustomRange: Story = {
    args: {
        label: 'Temperature (°C)',
        min: -20,
        max: 40,
        defaultValue: 20,
    },
};

export const WithStep: Story = {
    args: {
        label: 'Rating',
        min: 0,
        max: 10,
        step: 0.5,
        defaultValue: 7.5,
    },
};

export const WithFormatter: Story = {
    args: {
        label: 'Price',
        min: 0,
        max: 1000,
        defaultValue: 500,
        valueFormatter: (value) => `$${value}`,
    },
};

export const Percentage: Story = {
    args: {
        label: 'Completion',
        min: 0,
        max: 100,
        defaultValue: 75,
        valueFormatter: (value) => `${value}%`,
    },
};

export const HideValue: Story = {
    args: {
        label: 'Brightness',
        showValue: false,
        defaultValue: 60,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Slider',
        defaultValue: 30,
        disabled: true,
    },
};

export const Interactive: Story = {
    render: () => {
        const [volume, setVolume] = useState(50);

        return (
            <div style={{ width: '400px' }}>
                <Slider
                    label="Volume Control"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                />
                <p style={{ marginTop: '1rem', textAlign: 'center' }}>
                    Current volume: {volume}%
                </p>
            </div>
        );
    },
};
