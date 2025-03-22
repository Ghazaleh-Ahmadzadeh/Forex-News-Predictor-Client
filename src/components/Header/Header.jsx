import React from 'react';
import './Header.scss';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
