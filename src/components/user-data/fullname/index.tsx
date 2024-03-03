import { useContext } from 'react'
import './style.scss'
import { themeContext } from '../../../context'

export const Fullname = ({ username }: { username: string }) => {
    const theme = useContext(themeContext)

    return (
        <label
            className={`fullname fullname-${theme.isDark ? 'dark' : 'light'}`}
        >
            {username}
        </label>
    )
}
