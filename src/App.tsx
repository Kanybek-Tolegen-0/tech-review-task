import { useTheme } from './hooks'
import { Container, SearchInput, ThemeButton, UserData } from './components'
import { themeContext as ThemeContext } from './context'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { IUserData } from './components/user-data'
import './style.scss'

export const App = () => {
    const [theme, toggleTheme] = useTheme()
    const [user, setUser] = useState<IUserData>()

    const getGithubUser = async (
        username: string,
        setError: (error: string) => void
    ) => {
        if (username !== user?.login) {
            await axios
                .get(`https://api.github.com/users/${username}`)
                .then(({ data }) => setUser(data))
                .catch((err: Error) => {
                    if (err instanceof AxiosError) {
                        setError(err.response?.data.message)
                    }
                })
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div
                style={{
                    background: theme.isDark ? '#141d2f' : '#f6f8ff',
                    height: '100vh',
                    width: '100%',
                    display: 'grid',
                    justifyContent: 'center',
                    gridTemplateRows: 'max-content max-content 0.5fr',
                    rowGap: '16px',
                    gridTemplateColumns: 'max-content'
                }}
            >
                <ThemeButton toggleTheme={toggleTheme} />
                <Container>
                    <SearchInput onSearch={getGithubUser} />
                </Container>
                {user ? (
                    <Container>
                        <UserData user={user} />
                    </Container>
                ) : null}
            </div>
        </ThemeContext.Provider>
    )
}
