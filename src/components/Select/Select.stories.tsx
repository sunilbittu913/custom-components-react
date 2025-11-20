import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
    args: {
        options: sampleOptions,
        placeholder: 'Select a framework',
    },
};

export const WithLabel: Story = {
    args: {
        options: sampleOptions,
        label: 'Choose Framework',
        placeholder: 'Select...',
    },
};

export const WithDefaultValue: Story = {
    args: {
        options: sampleOptions,
        defaultValue: 'react',
        label: 'Preferred Framework',
    },
};

export const WithDisabledOptions: Story = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
            { value: 'option3', label: 'Option 3' },
            { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
        ],
        label: 'Select an option',
    },
};

export const Disabled: Story = {
    args: {
        options: sampleOptions,
        defaultValue: 'react',
        disabled: true,
        label: 'Disabled Select',
    },
};

export const Interactive: Story = {
    args: {},
    render: () => {
        const [value, setValue] = useState('');

        return (
            <div style={{ minWidth: '300px' }}>
                <Select
                    options={sampleOptions}
                    value={value}
                    onChange={setValue}
                    label="Select Framework"
                    placeholder="Choose one..."
                />
                <p style={{ marginTop: '1rem' }}>
                    Selected: {value || 'None'}
                </p>
            </div>
        );
    },
};

export const CountrySelect: Story = {
    args: {
        options: [
            { value: 'us', label: '🇺🇸 United States' },
            { value: 'uk', label: '🇬🇧 United Kingdom' },
            { value: 'ca', label: '🇨🇦 Canada' },
            { value: 'au', label: '🇦🇺 Australia' },
            { value: 'de', label: '🇩🇪 Germany' },
        ],
        label: 'Country',
        placeholder: 'Select your country',
    },
};
