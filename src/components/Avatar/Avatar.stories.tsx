import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 'xlarge'],
        },
        shape: {
            control: 'select',
            options: ['circle', 'square'],
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=1',
        alt: 'John Doe',
    },
};

export const WithInitials: Story = {
    args: {
        initials: 'JD',
        alt: 'John Doe',
    },
};

export const Small: Story = {
    args: {
        initials: 'AB',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        initials: 'CD',
        size: 'large',
    },
};

export const XLarge: Story = {
    args: {
        initials: 'EF',
        size: 'xlarge',
    },
};

export const Square: Story = {
    args: {
        initials: 'GH',
        shape: 'square',
    },
};

export const SquareLarge: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=2',
        shape: 'square',
        size: 'large',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Avatar initials="SM" size="small" alt="Small" />
            <Avatar initials="MD" size="medium" alt="Medium" />
            <Avatar initials="LG" size="large" alt="Large" />
            <Avatar initials="XL" size="xlarge" alt="X-Large" />
        </div>
    ),
};

export const AvatarGroup: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 3" />
            <Avatar initials="+5" alt="5 more users" />
        </div>
    ),
};
