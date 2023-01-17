import React from 'react';
import classes from './Form.module.css';

export const Form = ({ children, ...props }) => {
    return (
        <form { ...props } className={ classes.form }>
            { children }
        </form>
    )
}