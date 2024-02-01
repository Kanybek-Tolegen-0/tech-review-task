import { useContext } from 'react'
import { SearchIcon } from '../../../assets/icons'
import './style.scss'
import { themeContext } from '../../context'
import { ErrorText } from './error-text'

export const SearchInput = ({
    error = false,
    onSearch
}: {
    error?: boolean
    onSearch: () => void
}) => {
    const theme = useContext(themeContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch()
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__flex-wrapper">
                <SearchIcon />
                <input
                    className={`search__input ${
                        theme.isDark
                            ? 'search__input-dark'
                            : 'search__input-light'
                    }`}
                    placeholder="Search Github username"
                />
            </div>
            <ErrorText error={error} />
            <button className="search__button" type="submit">
                Search
            </button>
        </form>
    )
}
