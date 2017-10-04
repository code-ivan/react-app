// @flow
import React, { Component } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'
import '../../../helpers/extendValidator'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

class App extends Component {
  constructor() {
      super();
      this.state = { hidden: true};
  }
  static displayName = 'App';

  static propTypes = {
    route: object.isRequired
  };

  componentDidMount() {
    setTimeout(function() {
      this.setState({ hidden: false});
    }.bind(this), 200);
  }

  componentDidUpdate() {
    //reset scrolling to top
    window.scrollTo(0, 0);
  }

  render() {
    const styles = require('./App.scss')

    const { route } = this.props

    return (
      <main className={(this.state.hidden ? styles.hideMain : '')}>
        <Header />
        <div className={ styles.page }>          
          { renderRoutes(route.routes) }
        </div>
        <Footer />
      </main>
    )
  }
}

export default App
