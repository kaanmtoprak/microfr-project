import React from 'react';
import s from "./footer.module.scss";
const Footer = () => {
    return (
        <footer className={s.footer}>
            <span>{new Date().getFullYear()} MKT &copy; All rights reserved</span>
        </footer>
    );
}

export default Footer;
