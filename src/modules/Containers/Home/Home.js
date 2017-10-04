// @flow
import React from 'react'
import Helmet from 'react-helmet'

export class Home extends React.Component {

  render() {

    return (
    <main>
      {/* Use Helmet for all meta tag */}
      <Helmet title="Home">
        <meta name="description" content="Home description" />
      </Helmet>
      <section className="masterContent">
        <div className="container">
          <h1>Home</h1>
        </div>
      </section>
    </main>
    )
  }
}

Home.displayName = 'Home'

export default Home
