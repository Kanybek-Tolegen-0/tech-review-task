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
import { IUserData } from './components/user-data'
import './style.scss'
import { useActionData, useNavigation } from 'react-router-dom'

export const App = () => {
    const [theme, toggleTheme] = useTheme()
    const { state } = useNavigation()
    const actionData = useActionData() as {
        data?: IUserData | null
        error?: string
    }

    console.log({ actionData })

    return (
        <ThemeContext.Provider value={theme}>
            <Layout>
                <ThemeButton toggleTheme={toggleTheme} />
                <Container>
                    <SearchInput error={actionData?.error} />
                </Container>
                {state === 'submitting' ? (
                    <Loader />
                ) : (
                    <UserData user={actionData?.data || null} />
                )}
            </Layout>
        </ThemeContext.Provider>
    )
}
