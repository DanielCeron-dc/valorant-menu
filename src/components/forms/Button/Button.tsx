import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outline';
    colorVariable?: 'primary' | 'secondary' | 'success' | 'tertiary' | 'quaternary' | 'danger' | 'warning';
    selected?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    const propsToPass = { ...props };
    delete propsToPass.selected;
    delete propsToPass.variant;
    delete propsToPass.colorVariable;
    return <button
        className={`
            ${styles.button}
            ${props.variant && styles[props.variant]} 
            ${props.selected && styles.selected}
            ${props.colorVariable && styles[props.colorVariable]}
        `}
        {...propsToPass}>
        {props.children}
    </button>
}

export default Button;