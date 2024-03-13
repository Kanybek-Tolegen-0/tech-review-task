import axios, { AxiosError } from 'axios'
import { redirect } from 'react-router-dom'

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData()
    const username = formData.get('username')

    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`
        )
        return { data: response.data }
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
                return { error: 'Not Found' }
            }

            return redirect('/error')
        }
    }
}
