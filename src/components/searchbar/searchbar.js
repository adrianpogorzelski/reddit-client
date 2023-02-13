import React from "react";

const Searchbar = () => {
    return (
        <section id="searchbar">
            <input id="searchText" type="text" placeholder="Search for a subreddit" />
            <button id="searchButton">Search</button>
        </section>
    )
}

export default Searchbar;