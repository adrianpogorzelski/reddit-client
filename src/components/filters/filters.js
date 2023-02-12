import React, {useState} from "react";
import {buttonClick} from "../../features/search";

const Filters = () => {
    return (
        <nav></nav>
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
