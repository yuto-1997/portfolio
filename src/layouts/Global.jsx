import React from 'react'
import { css, Global as EmotionGlobal } from '@emotion/core'
import { ThemeContext } from '../utils/themeContext'
import { getTheme } from '../../config/theme'
import generateHeadroom from '../styles/headroom'

const Global = () => (
  <ThemeContext.Consumer>
    {({ colorMode }) => {
      const theme = getTheme(colorMode)
      const headroom = generateHeadroom({ theme })
      const globalCss = css`
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        html {
          text-rendering: optimizeLegibility;
          overflow-x: hidden;
          box-sizing: border-box;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: ${theme.colors.background};
        }
        html,
        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        a {
          transition: color 0.5s;
          text-decoration: none;
        }
        a:hover {
          text-decoration: none;
        }
        ${headroom}
      `
      return <EmotionGlobal styles={globalCss} />
    }}
  </ThemeContext.Consumer>
)

export default Global
