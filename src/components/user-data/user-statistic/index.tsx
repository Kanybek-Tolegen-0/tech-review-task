import { useContext } from 'react'
import './style.scss'
import { themeContext } from '../../../context'

export const UserStatistics = ({
    followers,
    following,
    repos
}: {
    followers: number
    following: number
    repos: number
}) => {
    const theme = useContext(themeContext)

    return (
        <div
            className={`user-statistic user-statistic-${
                theme.isDark ? 'dark' : 'light'
            }`}
        >
            <label className="statistic-label">Repos</label>
            <label className="statistic-label">Followers</label>
            <label className="statistic-label">Following</label>
            <label
                className={`statistic-number statistic-number-${
                    theme.isDark ? 'dark' : 'light'
                }`}
            >
                {repos}
            </label>
            <label
                className={`statistic-number statistic-number-${
                    theme.isDark ? 'dark' : 'light'
                }`}
            >
                {followers}
            </label>
            <label
                className={`statistic-number statistic-number-${
                    theme.isDark ? 'dark' : 'light'
                }`}
            >
                {following}
            </label>
        </div>
    )
}
