import './tile.css';

const loadMediaType = (props) => {
    if (props.src) {
        return <img src={props.src} alt={props.title} />
    } else {
        return (
            <video controls>
                <source src={props.videoLink} />
            </video>
        )
    }
}


export const Tile = (props) => {
    return (
        <div className="tile">
            <h3>{props.title}</h3>
            {loadMediaType(props)}
        </div>
    )
}