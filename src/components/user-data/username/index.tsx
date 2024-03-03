import './style.scss'

export const Username = ({ username }: { username: string }) => (
    <label className="username">@{username}</label>
)
