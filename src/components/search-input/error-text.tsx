export const ErrorText = ({ error }: { error: boolean }) => {
    return error ? <span className="error-text">No Result</span> : null
}
