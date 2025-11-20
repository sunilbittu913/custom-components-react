import React from 'react';

export interface PaginationProps {
    /**
     * Total number of items
     */
    total: number;
    /**
     * Number of items per page
     */
    pageSize?: number;
    /**
     * Current page number (1-indexed)
     */
    current?: number;
    /**
     * Default page number
     */
    defaultCurrent?: number;
    /**
     * Callback when page changes
     */
    onChange?: (page: number) => void;
    /**
     * Show size changer
     */
    showSizeChanger?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Pagination component for navigating through pages
 */
export const Pagination: React.FC<PaginationProps> = ({
    total,
    pageSize = 10,
    current,
    defaultCurrent = 1,
    onChange,
    className = '',
}) => {
    const [internalCurrent, setInternalCurrent] = React.useState(defaultCurrent);

    const currentPage = current !== undefined ? current : internalCurrent;
    const totalPages = Math.ceil(total / pageSize);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;

        setInternalCurrent(page);
        if (onChange) {
            onChange(page);
        }
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 7;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                for (let i = 1; i <= 5; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className={`pagination ${className}`.trim()}>
            <button
                className="pagination-button pagination-prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                ←
            </button>

            {getPageNumbers().map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        className={`pagination-button ${currentPage === page ? 'pagination-button-active' : ''}`.trim()}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="pagination-ellipsis">
                        {page}
                    </span>
                )
            )}

            <button
                className="pagination-button pagination-next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                →
            </button>
        </div>
    );
};
