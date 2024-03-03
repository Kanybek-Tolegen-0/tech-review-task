import './style.scss'

export const UserAvatar = ({ avatarUrl }: { avatarUrl: string | null }) =>
    avatarUrl ? <img className="user-avatar" src={avatarUrl} /> : null
