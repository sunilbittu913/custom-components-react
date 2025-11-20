import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta = {
    title: 'Components/FileUpload',
    component: FileUpload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        multiple: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Upload File',
        helperText: 'Choose a file to upload',
    },
};

export const WithError: Story = {
    args: {
        label: 'Upload Document',
        error: 'File size must be less than 5MB',
    },
};

export const CustomButtonText: Story = {
    args: {
        label: 'Profile Picture',
        buttonText: 'Browse...',
        helperText: 'Accepted formats: PNG, JPG, GIF',
    },
};

export const MultipleFiles: Story = {
    args: {
        label: 'Upload Multiple Files',
        buttonText: 'Select Files',
        multiple: true,
        helperText: 'You can select multiple files',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Upload File',
        disabled: true,
        helperText: 'File upload is disabled',
    },
};

export const WithAcceptType: Story = {
    args: {
        label: 'Upload Image',
        buttonText: 'Choose Image',
        accept: 'image/*',
        helperText: 'Only image files are accepted',
    },
};
