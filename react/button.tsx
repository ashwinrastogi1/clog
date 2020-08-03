import React from 'react';
import cx from 'classnames';
import style from '../static/button.module.css';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({onClick, className, children}) => {
    const buttonClasses = cx({
        [style.button_frame]: true,
        [className]: className !== undefined,
    })
    return <div onClick={onClick} className={buttonClasses}>{children}</div>;
}