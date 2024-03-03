import './style.scss'

export const Bio = ({ bio }: { bio: string | null }) => (
    <label className="bio">{bio || 'This profile has no bio'}</label>
)
