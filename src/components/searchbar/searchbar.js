import React from "react";
import {buttonClick} from "../../features/search";

/*const search = () => {
    const inputValue = document.getElementById('search').value
    console.log(inputValue)
    buttonClick(inputValue)
}*/

const Searchbar = () => {
    return (
        <section id="searchbar">
            <input id="search" type="text" placeholder="Search for a subreddit" />
            <button id="searchButton">Search</button>
        </section>
    )
}

export default Searchbar;