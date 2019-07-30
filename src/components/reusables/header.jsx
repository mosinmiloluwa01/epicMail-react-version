/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <header>
      <Link to="#" className="epic-title">
        Epic Mail
      </Link>
      <div className="nav">
        <Link to="/" className="navlink" onClick={logout}>
          logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
