import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { useState } from 'react';

const meta = {
    title: 'Components/Stepper',
    component: Stepper,
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
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Quantity',
        defaultValue: 0,
    },
};

export const WithMinMax: Story = {
    args: {
        label: 'Select Amount (1-10)',
        defaultValue: 5,
        min: 1,
        max: 10,
    },
};

export const WithStep: Story = {
    args: {
        label: 'Temperature (°C)',
        defaultValue: 20,
        min: -10,
        max: 40,
        step: 5,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Stepper',
        defaultValue: 3,
        disabled: true,
    },
};

export const Counter: Story = {
    args: {
        label: 'Counter',
        defaultValue: 0,
        min: 0,
    },
};

export const Interactive: Story = {
    render: () => {
        const [quantity, setQuantity] = useState(1);
        const price = 29.99;

        return (
            <div style={{ minWidth: '250px' }}>
                <Stepper
                    label="Product Quantity"
                    value={quantity}
                    onChange={setQuantity}
                    min={1}
                    max={99}
                />
                <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
                    <p><strong>Price per item:</strong> ${price.toFixed(2)}</p>
                    <p><strong>Total:</strong> ${(quantity * price).toFixed(2)}</p>
                </div>
            </div>
        );
    },
};

export const MultipleSteppers: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '200px' }}>
            <Stepper label="Adults" defaultValue={2} min={1} max={10} />
            <Stepper label="Children" defaultValue={0} min={0} max={10} />
            <Stepper label="Infants" defaultValue={0} min={0} max={5} />
        </div>
    ),
};
