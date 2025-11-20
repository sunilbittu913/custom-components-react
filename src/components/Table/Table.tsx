import React from 'react';

export interface TableColumn<T = Record<string, unknown>> {
    key: string;
    title: string;
    dataIndex?: string;
    render?: (value: unknown, record: T, index: number) => React.ReactNode;
    width?: number | string;
    align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = Record<string, unknown>> {
    /**
     * Table columns configuration
     */
    columns: TableColumn<T>[];
    /**
     * Table data source
     */
    dataSource: T[];
    /**
     * Row key extractor
     */
    rowKey?: string | ((record: T) => string);
    /**
     * Show table borders
     */
    bordered?: boolean;
    /**
     * Enable hover effect
     */
    hoverable?: boolean;
    /**
     * Enable striped rows
     */
    striped?: boolean;
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * Empty state content
     */
    emptyText?: React.ReactNode;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Table component for displaying tabular data
 */
export function Table<T = Record<string, unknown>>({
    columns,
    dataSource,
    rowKey = 'id',
    bordered = false,
    hoverable = true,
    striped = false,
    loading = false,
    emptyText = 'No data',
    className = '',
}: TableProps<T>) {
    const getRowKey = (record: T, index: number): string => {
        if (typeof rowKey === 'function') {
            return rowKey(record);
        }
        const keyValue = (record as Record<string, unknown>)[rowKey];
        // Only convert primitive types to string
        if (
            typeof keyValue === 'string' ||
            typeof keyValue === 'number' ||
            typeof keyValue === 'boolean'
        ) {
            return String(keyValue);
        }
        return String(index);
    };

    const getCellValue = (column: TableColumn<T>, record: T, index: number): React.ReactNode => {
        if (column.render) {
            const value = column.dataIndex ? (record as Record<string, unknown>)[column.dataIndex] : record;
            return column.render(value, record, index);
        }
        const value = column.dataIndex ? (record as Record<string, unknown>)[column.dataIndex] : null;
        // Type assertion to ReactNode since we're displaying it in the UI
        return value as React.ReactNode;
    };

    if (loading) {
        return (
            <div className={`table-container ${className}`.trim()}>
                <div className="table-loading">Loading...</div>
            </div>
        );
    }

    return (
        <div className={`table-container ${className}`.trim()}>
            <table
                className={`table ${bordered ? 'table-bordered' : ''} ${hoverable ? 'table-hoverable' : ''} ${striped ? 'table-striped' : ''
                    }`.trim()}
            >
                <thead className="table-header">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className={`table-cell table-header-cell ${column.align ? `table-cell-${column.align}` : ''}`.trim()}
                                style={{ width: column.width }}
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-body">
                    {dataSource.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="table-empty">
                                {emptyText}
                            </td>
                        </tr>
                    ) : (
                        dataSource.map((record, index) => (
                            <tr key={getRowKey(record, index)} className="table-row">
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={`table-cell ${column.align ? `table-cell-${column.align}` : ''}`.trim()}
                                        style={{ width: column.width }}
                                    >
                                        {getCellValue(column, record, index)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
