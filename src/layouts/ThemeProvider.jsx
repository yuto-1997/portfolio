import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'
import { ThemeContext } from '../utils/themeContext'
import { getTheme } from '../../config/theme'
import { title } from '../../config/site'

const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(undefined)

  useEffect(() => {
    setColorMode(localStorage.getItem(title) || 'light')
  }, [])

  useEffect(() => {
    localStorage.setItem(title, colorMode)
  }, [colorMode])

  function toggleColorMode () {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }
  return (
    <EmotionProvider theme={getTheme(colorMode)}>
      <ThemeContext.Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider
