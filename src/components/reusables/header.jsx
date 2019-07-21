/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    state = { }

    render() {
      return (
            <header>
                <Link to='#' className='epic-title'>Epic Mail</Link>
                <div className='nav'>
                   <Link to='/profile' className='navlink'>profile</Link>
                   <Link to='#' className='navlink'>logout</Link>
                </div>
                </header>
      );
    }
}

export default HeaderComponent;
