import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
    title: 'Components/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
        },
        underline: {
            control: 'select',
            options: ['none', 'hover', 'always'],
        },
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'This is a link',
        href: '#',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary link',
        href: '#',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary link',
        href: '#',
        variant: 'secondary',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger link',
        href: '#',
        variant: 'danger',
    },
};

export const NoUnderline: Story = {
    args: {
        children: 'Link with no underline',
        href: '#',
        underline: 'none',
    },
};

export const AlwaysUnderline: Story = {
    args: {
        children: 'Link always underlined',
        href: '#',
        underline: 'always',
    },
};

export const ExternalLink: Story = {
    args: {
        children: 'External link (opens in new tab)',
        href: 'https://www.example.com',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
};

export const InText: Story = {
    args: {},
    render: () => (
        <p style={{ maxWidth: '400px' }}>
            This is a paragraph with an{' '}
            <Link href="#">inline link</Link>
            {' '}that you can click on to navigate somewhere.
        </p>
    ),
};
