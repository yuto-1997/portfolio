import lightTheme from './light'
import darkTheme from './dark'

const commonTheme = {
  breakpoints: {
    s: '480px',
    m: '768px',
    l: '992px',
    xl: '1200px'
  }
}

export function getTheme (colorMode) {
  switch (colorMode) {
    case 'light':
      return { ...commonTheme, ...lightTheme }
    case 'dark':
      return { ...commonTheme, ...darkTheme }
    default:
      return { ...commonTheme, ...lightTheme }
  }
}
