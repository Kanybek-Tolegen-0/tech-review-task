import { useTheme } from './hooks'
import {
    Container,
    Layout,
    Loader,
    SearchInput,
    ThemeButton,
    UserData
} from './components'
import { themeContext as ThemeContext } from './context'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { IUserData } from './components/user-data'
import './style.scss'

export const App = () => {
    const [theme, toggleTheme] = useTheme()
    const [user, setUser] = useState<IUserData | null>(null)
    const [loader, setLoader] = useState(false)

    const getGithubUser = (
        username: string,
        setError: (error: string) => void
    ) => {
        if (username !== user?.login) {
            setLoader(true)
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(({ data }) => setUser(data))
                .catch((err: Error) => {
                    if (err instanceof AxiosError) {
                        setUser(null)
                        setError(err.response?.data.message)
                    }
                })
                .finally(() => setLoader(false))
        }
    }

    console.log({ user })

    return (
        <ThemeContext.Provider value={theme}>
            <Layout>
                <ThemeButton toggleTheme={toggleTheme} />
                <Container>
                    <SearchInput onSearch={getGithubUser} />
                </Container>
                {loader ? <Loader /> : <UserData user={user} />}
            </Layout>
        </ThemeContext.Provider>
    )
}
