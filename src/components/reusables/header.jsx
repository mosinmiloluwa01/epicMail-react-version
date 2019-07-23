/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
      <Link to="#" className="epic-title">
        Epic Mail
      </Link>
      <div className="nav">
        <Link to="/profile" className="navlink">
          profile
        </Link>
        <Link to="#" className="navlink">
          logout
        </Link>
      </div>
    </header>
);

export default Header;
