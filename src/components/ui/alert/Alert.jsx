import React from "react";
import classes from './Alert.module.css';

export const Alert = ({ children }) => {
    return (
        <div className={ classes.alert }>
            { children }
        </div>
    )
}