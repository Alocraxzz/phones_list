import React from 'react';
import classes from './Button.module.css';

export const Button = ({ children, ...props }) => {
    return (
        <button {...props}
            aria-label="button"
            className={classes.button}
        >
            {children}
        </button>
    )
}