import type { Meta, StoryObj } from '@storybook/react';
import { Tag, type TagVariant } from './Tag';
import { useState } from 'react';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default Tag',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: 'Success',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        children: 'Warning',
        variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger',
        variant: 'danger',
    },
};

export const Closable: Story = {
    args: {
        children: 'Closable Tag',
        closable: true,
        onClose: () => alert('Tag closed!'),
    },
};

export const AllVariants: Story = {
    args: {},
    render: () => (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Tag variant="default">Default</Tag>
            <Tag variant="primary">Primary</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="danger">Danger</Tag>
            <Tag variant="info">Info</Tag>
        </div>
    ),
};

export const InteractiveClosable: Story = {
    args: {},
    render: () => {
        const [tags, setTags] = useState([
            { id: 1, label: 'React', variant: 'primary' as TagVariant },
            { id: 2, label: 'TypeScript', variant: 'info' as TagVariant },
            { id: 3, label: 'Storybook', variant: 'success' as TagVariant },
            { id: 4, label: 'CSS', variant: 'warning' as TagVariant },
        ]);

        const removeTag = (id: number) => {
            setTags(tags.filter(tag => tag.id !== id));
        };

        return (
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tags.map(tag => (
                    <Tag
                        key={tag.id}
                        variant={tag.variant}
                        closable
                        onClose={() => removeTag(tag.id)}
                    >
                        {tag.label}
                    </Tag>
                ))}
            </div>
        );
    },
};
