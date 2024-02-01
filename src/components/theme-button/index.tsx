import { useContext } from 'react'
import { MoonIcon, SunIcon } from './../../../assets/icons'
import { themeContext } from '../../context'
import './style.scss'

export const ThemeButton = ({ toggleTheme }: { toggleTheme: () => void }) => {
    const theme = useContext(themeContext)

    return (
        <div className="theme">
            <span
                className={
                    theme.isDark ? 'theme__text-light' : 'theme_text-dark'
                }
            >
                {theme.isDark ? 'LIGHT' : 'DARK'}
            </span>
            <button className="theme__button" onClick={toggleTheme}>
                {theme.isDark ? <SunIcon /> : <MoonIcon />}
            </button>
        </div>
    )
}
