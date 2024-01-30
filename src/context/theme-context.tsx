import { createContext } from 'react'

export interface ITheme {
    isDark: boolean
}

export const themeContext = createContext<ITheme>({
    isDark: false
})
