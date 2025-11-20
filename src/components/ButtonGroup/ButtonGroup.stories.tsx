import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const meta = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: () => (
        <ButtonGroup>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
        </ButtonGroup>
    ),
};

export const WithVariants: Story = {
    args: {},
    render: () => (
        <ButtonGroup>
            <Button variant="primary">Save</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Delete</Button>
        </ButtonGroup>
    ),
};

export const Vertical: Story = {
    args: {},
    render: () => (
        <ButtonGroup vertical>
            <Button>Top</Button>
            <Button>Middle</Button>
            <Button>Bottom</Button>
        </ButtonGroup>
    ),
};

export const ManyButtons: Story = {
    args: {},
    render: () => (
        <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
        </ButtonGroup>
    ),
};

export const ViewSwitcher: Story = {
    args: {},
    render: () => (
        <ButtonGroup>
            <Button variant="secondary">List</Button>
            <Button variant="primary">Grid</Button>
            <Button variant="secondary">Table</Button>
        </ButtonGroup>
    ),
};
