import './style.scss'

export const UserAvatar = ({ avatarUrl }: { avatarUrl: string }) => (
    <img className="user-avatar" src={avatarUrl} />
)
