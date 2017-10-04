// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setShowFinanceSubmenu, setShowMenu } from '../../Reducers/actions/navActions'
import Loading from '../../Components/Loading';

class Nav extends React.Component {

  render() {
    const styles = require('./Nav.scss')

    const { menu, nav, applicationOnGoing} = this.props;

    const toggleFinanceSubmenu = () => {
      this.props.setShowFinanceSubmenu(!nav.showFinanceSubmenu, menu);
    }

    const showFinanceSubmenu = () => {
      this.props.setShowFinanceSubmenu(true, menu);
    }

    const hideFinanceSubmenu = (hideRootMenu) => {
      if(hideRootMenu)
        closeMenu();  
      this.props.setShowFinanceSubmenu(false, menu);
    }
    
    const toggleMenu = () => {
      this.props.setShowMenu(!nav.showMenu);
    }

    const closeMenu = () => {
      this.props.setShowMenu(false);
    }

    return (
        <nav className={ styles.nav + (nav.showMenu ? ' '+styles.openMenu : '') }>
          <div className={styles.icon} onClick={ toggleMenu }>
            <i className="fa fa-bars"></i>
          </div>
          <ul className={ styles.navList }>
            <li className={ styles.navListItem }>
              <NavLink onClick={ closeMenu }  to="/" className={ styles.navLink } activeClassName={ styles.active } exact>About us</NavLink>
            </li>
            <li className={ styles.navListItem }>
              <NavLink onClick={ closeMenu }  to="/blog" className={ styles.navLink } activeClassName={ styles.active } exact>Blog</NavLink>
            </li>
          </ul>
        </nav>
    )
  }
}

Nav.displayName = 'Nav'

const mapStateToProps = state => ({
 nav: state.nav,
})


const mapDispatchToProps = (dispatch) => {
  return {
    setShowFinanceSubmenu: (value, menu) => {
        dispatch(setShowFinanceSubmenu(value));
      },
      setShowMenu: (value) => {
        dispatch(setShowMenu(value));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
