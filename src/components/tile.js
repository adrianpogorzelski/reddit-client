import './tile.css';

/*
const loadContent = (props) => {
    if (!content) {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="Loading..."/>
    } else {
        return (
            <div>
                {Object.entries(content.data.children).map(item => {
                    if (item[1].data.is_video) {
                        return (
                            <div>
                                <h3>{JSON.stringify(item[1].data.title)}</h3>
                                <video controls>
                                    <source src={item[1].data.secure_media.reddit_video.fallback_url} />
                                </video>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <h3>{JSON.stringify(item[1].data.title)}</h3>
                                <img src={item[1].data.url} alt={item[1].data.title}/>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}
*/
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
        <div class="tile">
            <h3>{props.title}</h3>
            {loadMediaType(props)}
        </div>
    )
}