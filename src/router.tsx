import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { action } from './action'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        action
    }
])
