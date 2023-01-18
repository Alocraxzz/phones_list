import React from 'react';
import classes from './Input.module.css';

export const Input = ({ children, ...props }) => {
    return (
        <div className={ classes.inputContainer }>
            <input { ...props } 
                placeholder=" "
                className={[classes.input, classes.large].join(' ')} 
            />
            <label className={ classes.inputLabel } htmlFor={ props.id }>
                { children }
            </label>
        </div>
    )
}