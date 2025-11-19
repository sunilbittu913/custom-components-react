import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['elevated', 'outlined'],
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        header: 'Card Title',
        children: 'This is the main content of the card. It can contain any React components or text.',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        header: 'Card Title',
        children: 'This card has an outlined variant with a border instead of a shadow.',
    },
};

export const WithFooter: Story = {
    args: {
        variant: 'elevated',
        header: 'Card with Footer',
        children: 'This card includes a footer section at the bottom.',
        footer: <Button variant="primary">Action</Button>,
    },
};

export const CustomHeader: Story = {
    args: {
        variant: 'elevated',
        header: (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="card-title">Custom Header</h3>
                <Button size="small" variant="secondary">Edit</Button>
            </div>
        ),
        children: 'This card has a custom header with a button.',
    },
};

export const NoHeader: Story = {
    args: {
        variant: 'elevated',
        children: 'This card has no header, just content.',
    },
};

export const FullExample: Story = {
    args: {
        variant: 'elevated',
        header: 'Product Details',
        children: (
            <div>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Price:</strong> $99.99
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <strong>Availability:</strong> In Stock
                </p>
                <p>
                    This is a premium product with excellent features and quality craftsmanship.
                </p>
            </div>
        ),
        footer: (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary">Save for Later</Button>
            </div>
        ),
    },
};
