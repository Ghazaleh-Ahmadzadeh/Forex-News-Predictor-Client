import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = ({ title }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';
  const navLabel = isDashboard ? 'Historical Data' : 'Back to Dashboard';
  const navLink = isDashboard ? '/historical' : '/';
  
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">{title}</h1>
      </div>
      <div className="header__right">
        <Link to={navLink} className="header__button">
          {navLabel}
        </Link>
      </div>
    </header>
  );
};

export default Header;