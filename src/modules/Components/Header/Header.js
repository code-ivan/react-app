// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Nav from '../Nav'

class Header extends React.Component {

  render() {
    const styles = require('./Header.scss')

    return (
      <header className={ styles.Header }>
        <div className="pull-left">
            <div className={ styles.logo }>
              <Link to="/">          
                <img src={'/assets/images/logo.png'} />
              </Link>
            </div>
        </div>

        <Nav />
      </header>
    )
  }
};

Header.displayName = 'Header'

export default Header
