import './style.scss'

export const ErrorText = ({ error }: { error?: string }) =>
    error ? <span className="error-text">{error}</span> : null
