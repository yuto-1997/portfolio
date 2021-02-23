import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from './ThemeProvider'
import Global from './Global'
import SEO from '../components/SEO'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => (
  <ThemeProvider>
    <Global />
    <SEO />
    <NavBar />
    {children}
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
