import { useContext } from 'react'
import { MoonIcon, SunIcon } from './../../../assets/icons'
import { themeContext } from '../../context'
import './style.scss'

export const ThemeButton = ({ toggleTheme }: { toggleTheme: () => void }) => {
    const theme = useContext(themeContext)

    return (
        <button className="theme-button" onClick={toggleTheme}>
            {theme.isDark ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}
