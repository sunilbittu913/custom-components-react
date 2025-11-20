import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        key: '1',
        title: 'What is React?',
        content: <p>React is a JavaScript library for building user interfaces.</p>,
    },
    {
        key: '2',
        title: 'What is TypeScript?',
        content: <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>,
    },
    {
        key: '3',
        title: 'What is Storybook?',
        content: <p>Storybook is a tool for developing UI components in isolation.</p>,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

export const MultipleOpen: Story = {
    args: {
        items: sampleItems,
        multiple: true,
    },
};

export const DefaultOpen: Story = {
    args: {
        items: sampleItems,
        defaultOpenKeys: ['1', '2'],
        multiple: true,
    },
};

export const FAQExample: Story = {
    args: {
        items: [
            {
                key: 'shipping',
                title: 'What are the shipping options?',
                content: (
                    <div>
                        <p>We offer the following shipping options:</p>
                        <ul>
                            <li>Standard shipping (5-7 business days)</li>
                            <li>Express shipping (2-3 business days)</li>
                            <li>Overnight shipping (1 business day)</li>
                        </ul>
                    </div>
                ),
            },
            {
                key: 'returns',
                title: 'What is your return policy?',
                content: (
                    <p>We accept returns within 30 days of purchase. Items must be in original condition with tags attached.</p>
                ),
            },
            {
                key: 'payment',
                title: 'What payment methods do you accept?',
                content: (
                    <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
                ),
            },
        ],
    },
};
