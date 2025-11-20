import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'ghost'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const HeartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
    </svg>
);

const TrashIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);

const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6m8.66-11.66l-5.2 3M8.54 14l-5.2 3m17.32 0l-5.2-3M8.54 10l-5.2-3"></path>
    </svg>
);

export const Ghost: Story = {
    args: {
        icon: <HeartIcon />,
        variant: 'ghost',
        'aria-label': 'Like',
    },
};

export const Primary: Story = {
    args: {
        icon: <SearchIcon />,
        variant: 'primary',
        'aria-label': 'Search',
    },
};

export const Secondary: Story = {
    args: {
        icon: <SettingsIcon />,
        variant: 'secondary',
        'aria-label': 'Settings',
    },
};

export const Danger: Story = {
    args: {
        icon: <TrashIcon />,
        variant: 'danger',
        'aria-label': 'Delete',
    },
};

export const Small: Story = {
    args: {
        icon: <HeartIcon />,
        size: 'small',
        'aria-label': 'Like',
    },
};

export const Large: Story = {
    args: {
        icon: <HeartIcon />,
        size: 'large',
        'aria-label': 'Like',
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <IconButton icon={<HeartIcon />} variant="ghost" aria-label="Like" />
            <IconButton icon={<SearchIcon />} variant="primary" aria-label="Search" />
            <IconButton icon={<SettingsIcon />} variant="secondary" aria-label="Settings" />
            <IconButton icon={<TrashIcon />} variant="danger" aria-label="Delete" />
        </div>
    ),
};

export const AllSizes: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <IconButton icon={<HeartIcon />} size="small" aria-label="Like small" />
            <IconButton icon={<HeartIcon />} size="medium" aria-label="Like medium" />
            <IconButton icon={<HeartIcon />} size="large" aria-label="Like large" />
        </div>
    ),
};
