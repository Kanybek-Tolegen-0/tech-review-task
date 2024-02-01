import React, { useContext } from 'react'
import { themeContext } from '../../context'
import './style.scss'

export const Container = ({
    children,
    padding = '12px 16px',
    style = {},
    ...rest
}: {
    children: React.ReactNode
    style?: object
    padding?: string
}) => {
    const theme = useContext(themeContext)

    return (
        <div
            className={`container ${
                theme.isDark ? 'container__dark' : 'container__light'
            }`}
            style={{
                padding,
                ...style
            }}
            {...rest}
        >
            {children}
        </div>
    )
}
