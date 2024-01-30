import { useTheme } from './hooks'
import { ThemeButton } from './components'
import { themeContext as ThemeContext } from './context'

export const App = () => {
    const [theme, toggleTheme] = useTheme()

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeButton toggleTheme={toggleTheme} />
        </ThemeContext.Provider>
    )
}
