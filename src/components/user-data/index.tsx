import { UserAvatar } from './libs'

export interface IUserData {
    avatar_url: string | null
    bio: string | null
    company: string | null
    created_at: string
    login: string
    name: string
    followers: number
    following: number
    public_repos: number
    twitter_username: string | null
    location: string | null
}

export const UserData = ({ user }: { user: IUserData }) => {
    return (
        <>
            {user.avatar_url ? (
                <UserAvatar avatarUrl={user.avatar_url} />
            ) : null}
        </>
    )
}
