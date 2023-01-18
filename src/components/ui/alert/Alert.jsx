import React from "react";
import classes from './Alert.module.css';

export const Alert = ({ children, ...props }) => {
    return (
        <div {...props} className={ classes.alert }>
            { children }
        </div>
    )
}