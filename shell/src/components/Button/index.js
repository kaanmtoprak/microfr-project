import React from 'react';
import s from './button.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ disabled, htmlType, type, width, className, ...props }) => {
    return (
        <button className={classNames(s.button, {
            [s.buttonDisabled]: disabled,
            [s.buttonDark]: type === "dark",
            [s.buttonLight]: type === "light",
            [className]: className,
        })}
        aria-label="button"
        type={htmlType && htmlType}
        disabled={disabled}
        {...props}
        >
            {props.children && <span className={s.text}>{props.children}</span>}
        </button>
    );
}

Button.propTypes = {
    htmlType: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
}


export default Button;
