import React from 'react';
import Header from '../Header/Header';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header title="USD/IRR Predictor" />
      <main className="layout__main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
