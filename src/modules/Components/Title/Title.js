// @flow
import React from 'react'

export class Title extends React.Component {

  render() {
    const { title, subtitle, fontColorWhite } = this.props

    const styles = require('./Title.scss')

    return (
      <div className={ styles.title + ' ' + (fontColorWhite ? styles.fontColorWhite : ' ' )}>
          <h2>{ title }</h2>
          <span>
              { subtitle }
          </span>
      </div>
    )
  }
}

Title.displayName = 'Title'

export default Title
