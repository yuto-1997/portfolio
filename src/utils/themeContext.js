import { createContext, useContext } from 'react'

const defaultContext = {
  colorMode: 'light', // 現在のモードを管理
  setColorMode: () => {} // colorMode書き換え用の関数を渡す
}

export const ThemeContext = createContext(defaultContext)
export const useTheme = () => useContext(ThemeContext)
