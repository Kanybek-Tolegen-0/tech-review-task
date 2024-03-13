import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

const rootElement = document.getElementById('root')

if (rootElement) {
    const root = createRoot(rootElement)

    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )
}
