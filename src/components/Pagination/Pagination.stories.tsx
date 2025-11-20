import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        total: 100,
        pageSize: 10,
        defaultCurrent: 1,
    },
};

export const LargePagination: Story = {
    args: {
        total: 1000,
        pageSize: 10,
        defaultCurrent: 1,
    },
};

export const SmallPageSize: Story = {
    args: {
        total: 100,
        pageSize: 5,
        defaultCurrent: 1,
    },
};

export const Interactive: Story = {
    args: {},
    render: () => {
        const [current, setCurrent] = useState(1);
        const pageSize = 10;
        const total = 100;

        return (
            <div>
                <p style={{ marginBottom: '1rem' }}>
                    Current page: {current} of {Math.ceil(total / pageSize)}
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    Showing items {(current - 1) * pageSize + 1} - {Math.min(current * pageSize, total)} of {total}
                </p>
                <Pagination
                    total={total}
                    pageSize={pageSize}
                    current={current}
                    onChange={setCurrent}
                />
            </div>
        );
    },
};

export const MiddlePage: Story = {
    args: {
        total: 500,
        pageSize: 10,
        defaultCurrent: 25,
    },
};
