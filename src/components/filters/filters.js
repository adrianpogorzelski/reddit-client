import React from "react";
import './filters.css'
// import {buttonClick} from "../../features/search";
const mockList = ['Popular', 'Subreddit 2', 'Subreddit 3', 'Subreddit 4', 'Subreddit 5', 'Subreddit 6', 'Subreddit 7', 'Subreddit 8', 'Subreddit 9', 'Subreddit 10']

const Filters = () => {

    return (
        <nav>
            <button>Subreddits</button>
            <ul className='hidden'>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
                <li>Subreddit</li>
            </ul>
        </nav>
    )
/*
    const filterButtons = []
    const [subreddits, setSubreddits] = useState("")

    const getSubreddits = async () => {
        const subredditsArray = ['Popular']
        await fetch('https://www.reddit.com/subreddits.json')
            .then((response) => response.json())
            .then((jsonResponse) => {
                    for (let i = 1; i < 11; i++) {
                        subredditsArray.push(jsonResponse.data.children[i].data.display_name)
                    }
            })
        setSubreddits(subredditsArray)
    }

    getSubreddits()
    for (let i = 0; i < subreddits.length; i++) {
        filterButtons.push(<button key={subreddits[i]} onClick={() => buttonClick(subreddits[i])}>{subreddits[i]}</button>)
    }

    return (
        <nav id="filters">{filterButtons}</nav>
    )
*/
}

export default Filters
