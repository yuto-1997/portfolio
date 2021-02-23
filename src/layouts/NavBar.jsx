import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import styled from '@emotion/styled'
import logo from '../../static/logo/logo.png'
import { ThemeContext } from '../utils/themeContext'

import sun from '../../static/icons/sunny.svg'
import moon from '../../static/icons/moon.svg'

const StyledLogo = styled.img`
  width: 48px;
  height: 48px;
`

const StyledIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  cursor: pointer;
`

const NavBar = () => {
  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <Link to='/'>
        <StyledLogo src={logo} alt='logo' />
      </Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/taglist'>Tag List</Link>
        <ThemeContext.Consumer>
          {({ setColorMode, colorMode }) => (
            <StyledIcon
              onClick={setColorMode}
              src={colorMode === 'light' ? moon : sun}
              alt='colorMode'
            />
          )}
        </ThemeContext.Consumer>
      </nav>
    </Headroom>
  )
}

export default NavBar
