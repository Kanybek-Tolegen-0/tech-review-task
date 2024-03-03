import React, { useContext } from 'react'
import { themeContext } from '../../context'
import './style.scss'

export const Container = ({
    children,
    padding = '12px 16px'
}: {
    children: React.ReactNode
    padding?: string
}) => {
    const theme = useContext(themeContext)

    return (
        <div
            className={`container ${
                theme.isDark ? 'container__dark' : 'container__light'
            }`}
            style={{
                padding
            }}
        >
            {children}
        </div>
    )
}
