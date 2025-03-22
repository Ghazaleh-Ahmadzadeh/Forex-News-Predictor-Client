import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <nav className="layout__nav">
        <div className="layout__nav-left">
          <Link to="/" className="layout__nav-title">
            USD/IRR Predictor
          </Link>
        </div>
        <div className="layout__nav-right">
          <Link to="/historical" className="layout__nav-button">
            Historical Data
          </Link>
          <Link to="/news-insights" className="layout__nav-button">
            News Insights
          </Link>
        </div>
      </nav>
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;