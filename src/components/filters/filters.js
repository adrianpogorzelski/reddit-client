import React from "react";
import './filters.css'
import {store} from "../../store/store";

export const clickOption = id => {
    return {
        type: 'subreddits/currentSubreddit',
        payload: id
    }
}

const Filters = () => {
    return (
        <nav>
            <button id='filtersButton'>Subreddits</button>
            <ul>
                <li id='popular' onClick={() => store.dispatch(clickOption('popular'))}>Popular</li>
                <li>Subreddit 2</li>
                <li>Subreddit 3</li>
                <li>Subreddit 4</li>
                <li>Subreddit 5</li>
                <li>Subreddit 6</li>
                <li>Subreddit 7</li>
                <li>Subreddit 8</li>
                <li>Subreddit 9</li>
                <li>Subreddit 10</li>
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
