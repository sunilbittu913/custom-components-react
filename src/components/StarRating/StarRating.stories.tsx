import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';
import { useState } from 'react';

const meta = {
    title: 'Components/StarRating',
    component: StarRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        maxStars: {
            control: { type: 'number', min: 3, max: 10 },
        },
        size: {
            control: { type: 'number', min: 16, max: 64 },
        },
        readOnly: {
            control: 'boolean',
        },
        showValue: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Rate this product',
        defaultValue: 0,
    },
};

export const WithDefaultRating: Story = {
    args: {
        label: 'Customer Rating',
        defaultValue: 4,
        showValue: true,
    },
};

export const ReadOnly: Story = {
    args: {
        label: 'Average Rating',
        value: 3.5,
        readOnly: true,
        showValue: true,
    },
};

export const LargeStars: Story = {
    args: {
        label: 'Rate your experience',
        size: 48,
        defaultValue: 0,
    },
};

export const SmallStars: Story = {
    args: {
        label: 'Quick Rating',
        size: 16,
        defaultValue: 3,
    },
};

export const TenStars: Story = {
    args: {
        label: 'Rate out of 10',
        maxStars: 10,
        defaultValue: 7,
        showValue: true,
    },
};

export const Interactive: Story = {
    render: () => {
        const [rating, setRating] = useState(0);

        return (
            <div>
                <StarRating
                    label="Your Rating"
                    value={rating}
                    onChange={setRating}
                    showValue
                />
                <p style={{ marginTop: '1rem' }}>
                    {rating === 0 && 'Click to rate'}
                    {rating === 1 && 'Poor'}
                    {rating === 2 && 'Fair'}
                    {rating === 3 && 'Good'}
                    {rating === 4 && 'Very Good'}
                    {rating === 5 && 'Excellent!'}
                </p>
            </div>
        );
    },
};

export const ProductReview: Story = {
    render: () => (
        <div style={{ maxWidth: '400px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Review this Product</h3>
            <StarRating label="Quality" defaultValue={0} showValue />
            <div style={{ marginTop: '1rem' }}>
                <StarRating label="Value for Money" defaultValue={0} showValue />
            </div>
            <div style={{ marginTop: '1rem' }}>
                <StarRating label="Would Recommend" defaultValue={0} showValue />
            </div>
        </div>
    ),
};
