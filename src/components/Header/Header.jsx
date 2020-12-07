import React from 'react';
import s from './Header.module.css';
import logo from './../../img/logo.svg';

let Header = () => {
  return (
    <header className={`grid__element ${s.header}`}>
      <img className={s.header__logo} src={logo} />
      <div className={s.header__title}>tellme</div>
    </header>
  );
}

export default Header;
