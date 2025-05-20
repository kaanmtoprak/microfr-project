import React from "react";
import s from "./header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to={"/"} className={s.logo}>
        LOGO
      </Link>
      <div className={s.menu}>
        <Link to={"/pricing"} className={s.menuItem}>
          Pricing
        </Link>
        <Link to={"/about"} className={s.menuItem}>
          About
        </Link>
        <Link to={"/contact"} className={s.menuItem}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
