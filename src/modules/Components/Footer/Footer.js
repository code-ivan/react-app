// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

export class Footer extends React.Component {

  render() {

    const styles = require('./Footer.scss')

    return (
      <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <a href="#" target="_blank">
                            Company LOGO
                        </a>                    
                    </div>
                    {/* <div className="col-sm-2">
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                <a>Success stories</a>
                            </li>
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Careers</a>
                            </li>
                            <li>
                                <NavLink to={ `/apply` }>Find funding</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <ul>
                            <li>
                                Resources
                            </li>
                            <li>
                                <NavLink to={ `/blog` }>Blog</NavLink>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Resource centre</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <ul>
                            <li>
                                Contact
                            </li>
                            <li>
                                <a href="skype:+44203637415">+44 00 0 00</a>
                            </li>
                            <li>
                                <a href="mailto:contact@mail.com">contact@mail.com</a>
                            </li>
                            <li>
                                <a>1 Fore Street<br/>London EC2Y 9DT</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className={ styles.disclaimer}>
                    <p>Disclaimer</p>
                </div>
                <div className={styles.footerbottom}>
                <div className="pull-left">
                    <a href="#" target="_blank">Terms & Conditions</a>
                    <a href="#" target="_blank">Privacy & Cookie Policy</a>
                </div>                    
                <div className="pull-right">
                    <a href="#" target="_blank">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
                <div className="clearfix"></div>
            </div>
            </div>
        </footer>
    )
  }
}

Footer.displayName = 'Footer'

export default Footer
