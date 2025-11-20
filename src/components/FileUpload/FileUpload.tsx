import React, { useRef, useState } from 'react';

export interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Label for the file upload
     */
    label?: string;
    /**
     * Helper text
     */
    helperText?: string;
    /**
     * Error message
     */
    error?: string;
    /**
     * Custom button text
     */
    buttonText?: string;
    /**
     * Callback when files are selected
     */
    onFileSelect?: (files: FileList | null) => void;
    /**
     * Additional CSS classes for wrapper
     */
    wrapperClassName?: string;
}

/**
 * FileUpload component with drag-and-drop support
 */
export const FileUpload: React.FC<FileUploadProps> = ({
    label,
    helperText,
    error,
    buttonText = 'Choose File',
    onFileSelect,
    wrapperClassName = '',
    className = '',
    id,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFileName, setSelectedFileName] = useState<string>('');
    const fileInputId = id || 'file-upload';

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileName = e.target.files?.[0]?.name || '';
        setSelectedFileName(fileName);

        if (onFileSelect) {
            onFileSelect(e.target.files);
        }
        if (props.onChange) {
            props.onChange(e);
        }
    };

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    return (
        <div className={`file-upload-wrapper ${wrapperClassName}`.trim()}>
            {label && <label className="file-upload-label">{label}</label>}

            <div className={`file-upload-container ${error ? 'file-upload-error' : ''}`}>
                <input
                    ref={inputRef}
                    type="file"
                    id={fileInputId}
                    className={`file-upload-input ${className}`.trim()}
                    onChange={handleFileChange}
                    {...props}
                />
                <button
                    type="button"
                    className="file-upload-button"
                    onClick={handleButtonClick}
                    disabled={props.disabled}
                >
                    {buttonText}
                </button>
                <span className="file-upload-text">
                    {selectedFileName || 'No file chosen'}
                </span>
            </div>

            {error && <span className="file-upload-error-text">{error}</span>}
            {!error && helperText && <span className="file-upload-helper">{helperText}</span>}
        </div>
    );
};
