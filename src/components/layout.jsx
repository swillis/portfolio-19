/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import '../../static/styles/main.scss'
// import logo from '../../static/images/logo.svg'

const Layout = ({ children }) => (
  <div>
    <header>
      <a href='#'>samwill.is</a>
      <img src='' />
    </header>
    <main>{children}</main>
    <footer>Footer</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
