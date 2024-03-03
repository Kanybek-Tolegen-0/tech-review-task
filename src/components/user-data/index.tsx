import { Container } from '../container'
import { Bio } from './bio'
import { Username } from './username'
import { UserAvatar } from './user-avatar'
import { Fullname } from './fullname'
import { JoinedDate } from './joined-date'
import './style.scss'
import { UserStatistics } from './user-statistic'
import {
    BuildingIcon,
    LinkIcon,
    LocationIcon,
    TwitterIcon
} from '../../assets/icons'
import { AdditionalData } from './additional-data'
import { AdditionalInfo } from './additional-info'

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
    email: string | null
}

export const UserData = ({ user }: { user: IUserData | null }) => {
    return user ? (
        <Container>
            <div className="grid">
                <UserAvatar avatarUrl={user.avatar_url} />
                <Fullname username={user.name} />
                <JoinedDate date={user.created_at} />
                <Username username={user.login} />
                <Bio bio={user.bio} />
                <UserStatistics
                    followers={user.followers}
                    following={user.following}
                    repos={user.public_repos}
                />
                <AdditionalData>
                    <AdditionalInfo Icon={LocationIcon} info={user.location} />
                    <AdditionalInfo Icon={LinkIcon} info={user.email} />
                    <AdditionalInfo
                        Icon={TwitterIcon}
                        info={user.twitter_username}
                    />
                    <AdditionalInfo Icon={BuildingIcon} info={user.company} />
                </AdditionalData>
            </div>
        </Container>
    ) : null
}
