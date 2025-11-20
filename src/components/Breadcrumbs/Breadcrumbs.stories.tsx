import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Category', href: '/products/category' },
            { label: 'Item' },
        ],
    },
};

export const WithArrowSeparator: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Category' },
        ],
        separator: '→',
    },
};

export const WithChevronSeparator: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Settings', href: '/settings' },
            { label: 'Profile' },
        ],
        separator: '›',
    },
};

export const ShortPath: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Dashboard' },
        ],
    },
};

export const LongPath: Story = {
    args: {
        items: [
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Electronics', href: '/products/electronics' },
            { label: 'Computers', href: '/products/electronics/computers' },
            { label: 'Laptops', href: '/products/electronics/computers/laptops' },
            { label: 'MacBook Pro' },
        ],
    },
};

export const WithClickHandlers: Story = {
    args: {
        items: [
            { label: 'Home', onClick: () => alert('Navigate to Home') },
            { label: 'Products', onClick: () => alert('Navigate to Products') },
            { label: 'Current Page' },
        ],
    },
};
