import { useContext, useState } from 'react'
import { SearchIcon } from '../../../assets/icons'
import './style.scss'
import { themeContext } from '../../context'
import { ErrorText } from './error-text'

export const SearchInput = ({
    onSearch
}: {
    onSearch: (username: string, setIsError: (error: string) => void) => void
}) => {
    const theme = useContext(themeContext)
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')

    const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement
        setUsername(value)
        error && setError('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(username, setError)
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__flex-wrapper">
                <SearchIcon />
                <input
                    name="username"
                    className={`search__input ${
                        theme.isDark
                            ? 'search__input-dark'
                            : 'search__input-light'
                    }`}
                    placeholder="Search Github username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <ErrorText error={error} />
            <button className="search__button" type="submit">
                Search
            </button>
        </form>
    )
}
