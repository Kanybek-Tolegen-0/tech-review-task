import { MONTHS } from './constants'
import './style.scss'

export const JoinedDate = ({ date }: { date: string }) => {
    const dateObj = new Date(date)

    const day = dateObj.getDate()
    const monthIndex = dateObj.getMonth()
    const year = dateObj.getFullYear()

    return (
        <label className="joined-date">
            Joined {day} {MONTHS[monthIndex]} {year}
        </label>
    )
}
