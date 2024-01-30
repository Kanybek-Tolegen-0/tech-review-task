import { useState } from 'react'
import { ITheme } from '../context/theme-context'

export const useTheme = (): [ITheme, () => void] => {
    const [theme, setTheme] = useState<ITheme>({
        isDark: JSON.parse(localStorage.getItem('isDark') || 'false')
    })

    const toggleTheme = () => {
        setTheme((prev) => {
            const isDark = !theme.isDark
            localStorage.setItem('isDark', JSON.stringify(isDark))
            return { ...prev, isDark }
        })
    }

    return [theme, toggleTheme]
}
