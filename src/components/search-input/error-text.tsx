export const ErrorText = ({ error }: { error: string }) => {
    return error ? <span className="error-text">{error}</span> : null
}
