import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';
import { useState } from 'react';

const meta = {
    title: 'Components/Radio',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleRadio: Story = {
    render: () => <Radio label="Option 1" name="single" />,
};

export const BasicRadioGroup: Story = {
    args: {
        name: 'basic',
        label: 'Choose an option',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
    },
};

export const WithDefaultValue: Story = {
    args: {
        name: 'default',
        label: 'Select your preference',
        value: 'option2',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
    },
};

export const WithDisabledOptions: Story = {
    args: {
        name: 'disabled',
        label: 'Choose a plan',
        options: [
            { value: 'free', label: 'Free Plan' },
            { value: 'pro', label: 'Pro Plan' },
            { value: 'enterprise', label: 'Enterprise Plan', disabled: true },
        ],
    },
};

export const Interactive: Story = {
    render: () => {
        const [selected, setSelected] = useState('small');

        return (
            <div>
                <RadioGroup
                    name="size"
                    label="Select Size"
                    value={selected}
                    onChange={setSelected}
                    options={[
                        { value: 'small', label: 'Small' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'large', label: 'Large' },
                    ]}
                />
                <p style={{ marginTop: '1rem' }}>Selected: {selected}</p>
            </div>
        );
    },
};

export const PaymentMethod: Story = {
    args: {
        name: 'payment',
        label: 'Payment Method',
        options: [
            { value: 'credit', label: 'Credit Card' },
            { value: 'debit', label: 'Debit Card' },
            { value: 'paypal', label: 'PayPal' },
            { value: 'crypto', label: 'Cryptocurrency', disabled: true },
        ],
    },
};
