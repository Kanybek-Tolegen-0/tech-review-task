import { useContext } from 'react'
import { SearchIcon } from '../../../assets/icons'
import { themeContext } from '../../context'
import { Form } from 'react-router-dom'
import { ErrorText } from './error-text'
import './style.scss'

export const SearchInput = ({ error }: { error?: string }) => {
    const theme = useContext(themeContext)

    return (
        <Form method="post" className="search">
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
                />
            </div>
            <ErrorText error={error} />
            <button className="search__button" type="submit">
                Search
            </button>
        </Form>
    )
}
