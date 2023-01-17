import React from 'react';
import classes from './Text.module.css';

export const Title = ({ children }) => {
    return (
        <div className={ classes.title }>
            { children }
        </div>
    )
}