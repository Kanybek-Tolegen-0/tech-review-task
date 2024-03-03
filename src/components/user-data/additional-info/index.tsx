import './style.scss'

export const AdditionalInfo = ({
    Icon,
    info
}: {
    Icon: string
    info: string | null
}) => {
    return (
        <div className="additional-info">
            <Icon />
            <label>{info || 'Not Available'}</label>
        </div>
    )
}
