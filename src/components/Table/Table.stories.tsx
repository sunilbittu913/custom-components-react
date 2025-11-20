import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Badge } from '../Badge/Badge';

const meta = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
}

const sampleData: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active' },
];

export const Default: Story = {
    args: {
        columns: [
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
            { key: 'role', title: 'Role', dataIndex: 'role' },
        ],
        dataSource: sampleData,
    },
};

export const WithCustomRender: Story = {
    args: {
        columns: [
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
            { key: 'role', title: 'Role', dataIndex: 'role' },
            {
                key: 'status',
                title: 'Status',
                dataIndex: 'status',
                render: (value: string) => (
                    <Badge variant={value === 'active' ? 'success' : 'secondary'}>
                        {value}
                    </Badge>
                ),
            },
        ],
        dataSource: sampleData,
    },
};

export const Bordered: Story = {
    args: {
        columns: [
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
            { key: 'role', title: 'Role', dataIndex: 'role' },
        ],
        dataSource: sampleData,
        bordered: true,
    },
};

export const Striped: Story = {
    args: {
        columns: [
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
            { key: 'role', title: 'Role', dataIndex: 'role' },
        ],
        dataSource: sampleData,
        striped: true,
    },
};

export const WithAlignment: Story = {
    args: {
        columns: [
            { key: 'id', title: 'ID', dataIndex: 'id', align: 'center', width: 80 },
            { key: 'name', title: 'Name', dataIndex: 'name', align: 'left' },
            { key: 'email', title: 'Email', dataIndex: 'email', align: 'left' },
            { key: 'role', title: 'Role', dataIndex: 'role', align: 'right' },
        ],
        dataSource: sampleData,
    },
};

export const Empty: Story = {
    args: {
        columns: [
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
            { key: 'role', title: 'Role', dataIndex: 'role' },
        ],
        dataSource: [],
        emptyText: 'No users found',
    },
};

export const Loading: Story = {
    args: {
        columns: [
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
            { key: 'role', title: 'Role', dataIndex: 'role' },
        ],
        dataSource: sampleData,
        loading: true,
    },
};
