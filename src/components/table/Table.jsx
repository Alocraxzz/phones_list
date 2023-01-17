import React from 'react';
import classes from './Table.module.css';

export const Table = ({ children, ...props }) => {
    return (
        <div {...props} className={classes.tableContainer}>
            <table>
                {children}
            </table>
        </div>
    )
}