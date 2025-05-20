import React from 'react';
import s from './container.module.scss';

const Container = ({ children, pageTitle }) => {
    return (
        <div className={s.container}>
            {pageTitle && <h1 className={s.title}>{pageTitle}</h1>}
            {children}
        </div>
    );
}

export default Container;
