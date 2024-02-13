import React, { useContext } from 'react'
import { themeContext } from '../../context'
import './styles.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const theme = useContext(themeContext)

    return (
        <div
            className={`layout ${
                theme.isDark ? 'layout-dark' : 'layout-light'
            }`}
        >
            {children}
        </div>
    )
}
